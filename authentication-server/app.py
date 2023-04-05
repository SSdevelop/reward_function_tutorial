from flask import Flask, request, jsonify, session
from config import ApplicationConfig
from flask_cors import CORS
from Model import db, User
from flask_bcrypt import Bcrypt
from flask_session import Session

app = Flask(__name__)
CORS(app)
app.config.from_object(ApplicationConfig)
bcrypt = Bcrypt(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/auth/test', methods=['GET'])
def test():
    return jsonify({'message': 'test!'})

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    user_exists = User.query.filter_by(email=data['email']).first()
    if user_exists:
        return jsonify({'message': 'user already exists!'}), 409

    new_user = User(email=data['email'], password=hashed_password, user_role=data['user_role'])
    db.session.add(new_user)
    db.session.commit()

    session['user'] = new_user.id

    return jsonify({'message': 'registered!'})

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if not user:
        return jsonify({'message': 'user does not exist!'}), 404

    if bcrypt.check_password_hash(user.password, data['password']):
        session['user'] = user.id
        return jsonify({'message': 'logged in!', 'id': user.id})

    return jsonify({'message': 'invalid credentials!'}), 401

@app.route('/api/auth/me', methods=['GET'])
def me():
    user_id = session.get('user')
    if not user_id:
        return jsonify({'error': 'Not Authorised!'}), 403
    user = User.query.filter_by(id=user_id).first()
    return jsonify({'message': 'user found!', 'id': user.id, 'user': user.email, 'user_role': user.user_role})

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    session.pop('user')
    return jsonify({'message': 'logged out!'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000, debug=True)