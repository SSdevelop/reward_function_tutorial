from dotenv import load_dotenv
import os
from redis import Redis

load_dotenv()

config_uri = 'mysql+pymysql://root:{password}@authentication_server_db/app_users'.format(
    password=os.environ['MYSQL_PASSWORD']
)

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]

    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = config_uri

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = Redis(host='redis', port=6379)
