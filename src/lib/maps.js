import axios from "axios";
import {useSelector} from "react-redux";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND;

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

export const fetchMaps = () => async (dispatch, getState) => {
    const maps = getState().maps;
    if (maps.maps.length > 0) {
        return maps.maps;
    } else {
        dispatch(requestMaps());
        try {
            const response = await axios.get(`${API_BASE}/site/all`);
            await dispatch(receiveMaps(response.data)); // 等待状态更新完成
            return getState().maps.maps; // 获取最新状态
        } catch (error) {
            dispatch(mapsError(error.response.data.message));
            throw error;
        }
    }
};


export const updateFetchMaps = () => async (dispatch, getState) => {
    dispatch(requestMaps());
    try {
        const response = await axios.get(`${API_BASE}/site/all`);
        await dispatch(receiveMaps(response.data)); // 等待状态更新完成
        return getState().maps.maps; // 获取最新状态
    } catch (error) {
        dispatch(mapsError(error.response.data.message));
        throw error;
    }
}


