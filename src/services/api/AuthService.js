import axios from 'axios';
import {BASE} from "./constants";

const LOGIN = `${BASE}/api/users/login`;
const REGISTER = `${BASE}/api/users/register`;

class AuthService {
    startLogin = user => {
        const {username, password} = user;

        return axios.post(LOGIN, {
            username,
            password
        });
    };

    startRegister = user => {
        const {fullName, username, password} = user;

        return axios.post(REGISTER, {
            fullName,
            username,
            password
        });
    }
}

const authService = new AuthService();
export default authService;