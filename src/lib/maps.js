import axios from "axios";
import {useSelector} from "react-redux";
const API_BASE = process.env.REACT_APP_BACKEND || "http://localhost:9000";

const MAPS_REQUEST = "MAPS_REQUEST";
const MAPS_SUCCESS = "MAPS_SUCCESS";
const MAPS_FAILURE = "MAPS_FAILURE";


const requestMaps = () => ({ type: MAPS_REQUEST });
const receiveMaps = maps => ({ type: MAPS_SUCCESS, maps });
const mapsError = message => ({ type: MAPS_FAILURE, message });

// the format of maps is an array of objects
export default function maps(state = {
    isFetching: false,
    maps: [],
    errorMessage: ""
}, action){
    switch (action.type) {
        case MAPS_REQUEST:
            return{
                ...state,
                isFetching: true,
                maps: [],
                errorMessage: ""
            };
        case MAPS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                maps: action.maps,
                errorMessage: ""
            };
        case MAPS_FAILURE:
            return {
                ...state,
                isFetching: false,
                maps: [],
                errorMessage: action.message
            };
        default:
            return state;
    }
}

export const fetchMaps = () => async (dispatch,getState) => {
    const maps = getState().maps;
    if(maps.maps.length > 0){
        return maps.maps;
    }else{
        dispatch(requestMaps());
        try {
            const response = await axios.get(`${API_BASE}/site/all`);
            dispatch(receiveMaps(response.data));
            return response.data;
        } catch (error) {
            dispatch(mapsError(error.response.data.message));
            throw error;
        }
    }
};


