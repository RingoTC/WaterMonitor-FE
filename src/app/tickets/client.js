import axios from "axios";

const TICKETS_API = `http://localhost:9000/record`;
const USERS_API = `http://localhost:9000/user`;

export const findAllTickets = async () => {
    const response = await axios.get(`${TICKETS_API}/all`);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}/all`);
    return response.data;
};

export const createTicket = async () => {
    const response = await axios.post(`${TICKETS_API}/addticket`);
    return response.data;
};

export const deleteTicket = async (id) => {
    const response = await axios.delete(`${TICKETS_API}/delete/${id}`);
    return response.data;
};
