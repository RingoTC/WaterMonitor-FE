import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_BACKEND;
const USERS_API = `${API_BASE}/auth`;

export const signup = async (user) => {
    const response = await axios.post(
      `${USERS_API}/register`, user);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};
