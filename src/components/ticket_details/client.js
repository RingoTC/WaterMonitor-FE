import axios from "axios";

const SITES_API = `http://localhost:9000/site`;

export const findAllSites = async () => {
    const response = await axios.get(`${SITES_API}/all`);
    return response.data;
};

export const findSite = async (id) => {
    const response = await axios.get(`${SITES_API}/find/${id}`);
    return response.data;
};