import axios from 'axios';
import {BASE} from "./constants";

const FETCH_PETS = `${BASE}/api/pets`;
const POST_PET = `${BASE}/api/pets`;

class PetService {
    fetchPets = () => {
        return axios.get(FETCH_PETS);
    };

    postPet = pet => {
        return axios.post(POST_PET, pet);
    };
}

const petService = new PetService();
export default petService;