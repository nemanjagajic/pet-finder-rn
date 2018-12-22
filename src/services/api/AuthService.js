import axios from 'axios';
import {BASE} from "./constants";

const LOGIN = `${BASE}/api/users/login`;

class AuthService {
    startLogin = user => {
        const {username, password} = user;

        return axios.post(LOGIN, {
            username,
            password
        });
    };
}

const authService = new AuthService();
export default authService;