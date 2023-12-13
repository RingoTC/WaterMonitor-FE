import axios from "axios";

const TICKETS_API = `http://localhost:9000/record`;
const USERS_API = `http://localhost:9000/user`;
const SITES_API = `http://localhost:9000/site`;

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

export const findAllSites = async () => {
    const response = await axios.get(`${SITES_API}/all`);
    return response.data;
};

export const findSite = async (id) => {
    const response = await axios.get(`${SITES_API}/find/${id}`);
    return response.data;
};

export const updateTicket = async (id, updateData) => {
    try {
        const response = await axios.put(`${TICKETS_API}/updateticket/${id}`, updateData);
        return response.data;
    } catch (error) {
        console.error('Error updating ticket:', error);
        throw error; 
    }
};


export const getTicketById = async (id) => {
    try {
        const response = await axios.get(`${TICKETS_API}/ticket/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching ticket:', error);
        throw error;
    }
};