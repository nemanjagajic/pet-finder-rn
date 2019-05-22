import axios from 'axios';
import { BASE } from "./constants";

const GET_USERS = `${BASE}/api/users/`;
const PUT_USER = `${BASE}/api/users/`;

class UserService {
  getById = id => {
    return axios.get(`${GET_USERS}${id}`);
  };

  update = user => {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('fullName', user.fullName);
    formData.append('phoneNumber', user.phoneNumber);
    formData.append('password', user.password);
    formData.append('_method', 'PUT');

    return axios.post(`${PUT_USER}${user.id}`, formData);
  }
}

const userService = new UserService();
export default userService;