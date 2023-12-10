import axios from "axios";

const USERS_API = `http://localhost:9000/auth`;

export const signup = async (user) => {
    const response = await axios.post(
      `${USERS_API}/register`, user);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};
