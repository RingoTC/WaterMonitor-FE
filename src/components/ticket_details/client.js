import axios from "axios";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND;
const SITES_API = `${API_BASE}/site`;

export const findAllSites = async () => {
    const response = await axios.get(`${SITES_API}/all`);
    return response.data;
};

export const findSite = async (id) => {
    const response = await axios.get(`${SITES_API}/find/${id}`);
    return response.data;
};