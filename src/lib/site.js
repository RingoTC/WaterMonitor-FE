import axios from "axios";
import {useSelector} from "react-redux";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND;

const site_REQUEST = "site_REQUEST";
const site_SUCCESS = "site_SUCCESS";
const site_FAILURE = "site_FAILURE";


const requestsite = () => ({ type: site_REQUEST });
const receivesite = site => ({ type: site_SUCCESS, site });
const siteError = message => ({ type: site_FAILURE, message });

// the format of site is an array of objects
export default function site(state = {
    isFetching: false,
    site: [],
    errorMessage: ""
}, action){
    switch (action.type) {
        case site_REQUEST:
            return{
                ...state,
                isFetching: true,
                site: [],
                errorMessage: ""
            };
        case site_SUCCESS:
            return {
                ...state,
                isFetching: false,
                site: action.site,
                errorMessage: ""
            };
        case site_FAILURE:
            return {
                ...state,
                isFetching: false,
                site: [],
                errorMessage: action.message
            };
        default:
            return state;
    }
}

export const fetchSite = (siteID) => async (dispatch, getState) => {
    const { isFetching, site } = getState().site;

    if (isFetching || site.length > 0) {
        // If already fetching or site exist, return current site
        return site;
    }

    dispatch(requestsite());

    try {
        const response = await axios.get(`${API_BASE}/site/all/`);
        dispatch(receivesite(response.data));
        return response.data;
    } catch (error) {
        dispatch(siteError(error.response.data.message));
        throw error;
    }
};


