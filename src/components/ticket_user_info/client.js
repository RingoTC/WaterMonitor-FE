import axios from "axios";

const TICKETS_API = `${process.env.NEXT_PUBLIC_BACKEND}/record`;

export const findTotalTickets = async () => {
    const response = await axios.get(`${TICKETS_API}/totalcount`);
    return response.data;
};

export const findTotalComplete = async () => {
    const response = await axios.get(`${TICKETS_API}/totalComplete`);
    return response.data;
};

export const findTotalLoading = async () => {
    const response = await axios.get(`${TICKETS_API}/totalLoading`);
    return response.data;
};


