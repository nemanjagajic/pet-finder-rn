import axios from 'axios';
import {BASE} from "./constants";

const GET_USERS = `${BASE}/api/users/`;

class UserService {
    getById = id => {
        return axios.get(`${GET_USERS}${id}`);
    };
}

const userService = new UserService();
export default userService;