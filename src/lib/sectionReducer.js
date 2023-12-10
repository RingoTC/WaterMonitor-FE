const initialState = {
    list: [], // Initial empty array for section data
};

const sectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SECTION_DATA':
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default sectionReducer;
