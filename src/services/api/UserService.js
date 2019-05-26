import axios from 'axios';
import { BASE } from "./constants";

const PUT_USER = `${BASE}/api/users/`;

class UserService {
  update = user => {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('fullName', user.fullName);
    formData.append('phoneNumber', user.phoneNumber);
    formData.append('password', user.password);
    formData.append('_method', 'PUT');

    if (user.image) {
      let uri = user.image.uri;
      let name = uri.split('/').pop();
      let type = 'image/jpg';
      formData.append('image', { uri, name, type });
    }

    return axios.post(`${PUT_USER}${user.id}`, formData);
  }
}

const userService = new UserService();
export default userService;