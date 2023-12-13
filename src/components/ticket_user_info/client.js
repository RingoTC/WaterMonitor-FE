import axios from "axios";

const TICKETS_API = `${process.env.NEXT_PUBLIC_BACKEND}/record`;
const USER_API = `${process.env.NEXT_PUBLIC_BACKEND}/user`;

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

export const updateUserReminder = async (username, reminder) => {
    const response = await axios.put(`${USER_API}/update-reminder/${username}`, { reminder });
    return response.data;
};


