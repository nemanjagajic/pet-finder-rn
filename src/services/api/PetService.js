import axios from 'axios';
import {BASE} from "./constants";

const FETCH_PETS = `${BASE}/api/pets`;
const POST_PET = `${BASE}/api/pets`;
const FETCH_PET_ADS = `${BASE}/api/petAds`;
const POST_PET_AD = `${BASE}/api/petAds`;

class PetService {
    fetchPets = () => {
        return axios.get(FETCH_PETS);
    };

    postPet = pet => {
        return axios.post(POST_PET, pet);
    };

    fetchPetAds = () => {
        return axios.get(FETCH_PET_ADS);
    };

    postPetAd = petAd => {
        return axios.post(POST_PET_AD, petAd);
    };
}

const petService = new PetService();
export default petService;