import axios from 'axios';
import { BASE } from "./constants";

const FETCH_PETS = `${BASE}/api/pets`;
const FETCH_PET_ADS = `${BASE}/api/petAds`;
const POST_PET = `${BASE}/api/pets`;
const FETCH_LOST_PETS = `${BASE}/api/lostPets`;
const FETCH_ADOPTING_PETS = `${BASE}/api/adoptingPets`;
const POST_PET_AD = `${BASE}/api/petAds`;

class PetService {
  fetchPets = () => {
    return axios.get(FETCH_PETS);
  };

  postPet = pet => {
    let formData = new FormData();

    if (pet.image) {
      let uri = pet.image.uri;
      let name = uri.split('/').pop();
      let type = 'image/jpg';
      formData.append('image', { uri, name, type });
    }

    formData.append('city', pet.city);
    formData.append('country', pet.country);
    formData.append('description', pet.description);
    formData.append('latitude', pet.latitude);
    formData.append('longitude', pet.longitude);
    formData.append('name', pet.name);
    formData.append('street', pet.street);
    formData.append('userId', pet.userId);

    return axios.post(POST_PET, formData);
  };

  fetchLostPets = () => {
    return axios.get(FETCH_LOST_PETS);
  };

  fetchAdoptingPets = () => {
    return axios.get(FETCH_ADOPTING_PETS);
  };

  postPetAd = petAd => {
    let formData = new FormData();

    if (petAd.image) {
      let uri = petAd.image.uri;
      let name = uri.split('/').pop();
      let type = 'image/jpg';
      formData.append('image', { uri, name, type });
    }

    formData.append('description', petAd.description);
    formData.append('locationInfo', petAd.locationInfo);
    formData.append('phoneNumber', petAd.phoneNumber);
    formData.append('type', petAd.type);
    formData.append('userId', petAd.userId);

    return axios.post(POST_PET_AD, formData);
  };

  fetchPetComments = petId => {
    return axios.get(`${FETCH_PETS}/${petId}/comments`);
  };

  fetchPetAdComments = petAdId => {
    return axios.get(`${FETCH_PET_ADS}/${petAdId}/comments`);
  };
}

const petService = new PetService();
export default petService;