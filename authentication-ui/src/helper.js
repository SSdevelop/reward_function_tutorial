import axios from 'axios';

export const checkLogin = async () => {
    try {
        const res = await axios.get('http://localhost:8083/api/auth/me');
        console.log(res);
        if (res.status === 200) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(err.response.status);
        return false;

    }
    
};

export const logIn = async (email, password) => {
    try {
        const res = await axios.post('http://localhost:8083/api/auth/login', { email, password });
        console.log(res);
        if (res.status === 200) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log(err.response.status);
        return false;
    }
};

export const register = async (email, password, user_role) => {
    try {
        const res = await axios.post('http://localhost:8083/api/auth/register', { email, password, user_role });
        if(res.status === 200){
            return true;
        }
        return false;
    }
    catch(err) {
        return false;
    }
};
