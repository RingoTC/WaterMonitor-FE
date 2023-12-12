import axios from "axios";
import {useSelector} from "react-redux";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND;

const records_REQUEST = "records_REQUEST";
const records_SUCCESS = "records_SUCCESS";
const records_FAILURE = "records_FAILURE";


const requestRecords = () => ({ type: records_REQUEST });
const receiveRecords = records => ({ type: records_SUCCESS, records });
const recordsError = message => ({ type: records_FAILURE, message });

// the format of records is an array of objects
export default function records(state = {
    isFetching: false,
    records: [],
    errorMessage: ""
}, action){
    switch (action.type) {
        case records_REQUEST:
            return{
                ...state,
                isFetching: true,
                records: [],
                errorMessage: ""
            };
        case records_SUCCESS:
            return {
                ...state,
                isFetching: false,
                records: action.records,
                errorMessage: ""
            };
        case records_FAILURE:
            return {
                ...state,
                isFetching: false,
                records: [],
                errorMessage: action.message
            };
        default:
            return state;
    }
}

export const fetchRecords = () => async (dispatch, getState) => {
    const { isFetching, records } = getState().records;

    if (isFetching || records.length > 0) {
        // If already fetching or records exist, return current records
        return records;
    }

    dispatch(requestRecords());

    try {
        const response = await axios.get(`${API_BASE}/record/all/latest/`);
        dispatch(receiveRecords(response.data));
        return response.data;
    } catch (error) {
        dispatch(recordsError(error.response.data.message));
        throw error;
    }
};