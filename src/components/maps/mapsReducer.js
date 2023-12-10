// reducers.js
import { FETCH_MAPS_SUCCESS } from './mapsActions';

const mapsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MAPS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default mapsReducer;
