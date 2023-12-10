// reducers/cityReducer.js
const initialState = {
    list: [],
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITIES':
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default cityReducer;
