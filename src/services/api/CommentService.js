import axios from 'axios';
import {BASE} from "./constants";

const POST_PET_COMMENT = `${BASE}/api/petComments`;

class CommentService {
  postPetComment = petComment => {
    return axios.post(POST_PET_COMMENT, petComment);
  }
}

const commentService = new CommentService();
export default commentService;