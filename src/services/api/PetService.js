import axios from 'axios';
import {BASE} from "./constants";

const FETCH_PETS = `${BASE}/api/pets`;
const POST_PET = `${BASE}/api/pets`;
const FETCH_LOST_PETS = `${BASE}/api/lostPets`;
const POST_PET_AD = `${BASE}/api/petAds`;

class PetService {
    fetchPets = () => {
        return axios.get(FETCH_PETS);
    };

    postPet = pet => {
        return axios.post(POST_PET, pet);
    };

    fetchLostPets = () => {
        return axios.get(FETCH_LOST_PETS);
    };

    postPetAd = petAd => {
        return axios.post(POST_PET_AD, petAd);
    };
}

const petService = new PetService();
export default petService;