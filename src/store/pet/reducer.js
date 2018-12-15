import {ADD_FOUND_PET} from "./constants";

const initialState = {
    items: []
};

const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOUND_PET:
            return {
                ...state,
                items: state.items.concat(action.pet)
            };
        default:
            return state;
    }
};

export default petReducer;