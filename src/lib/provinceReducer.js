const initialState = {
    list: [],
};

const provinceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROVINCES':
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default provinceReducer;
