import axios from 'axios';

class AuthService {
    startLogin = user => {
        const {username, password} = user;

        return axios.post('http://localhost:8000/api/users/login', {
            username,
            password
        });
    };
}

const authService = new AuthService();
export default authService;