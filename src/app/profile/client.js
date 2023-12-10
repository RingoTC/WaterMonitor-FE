import Axios from 'axios';

const client = Axios.create({
    baseURL: 'http://localhost:9000/user',
});

export const userProfile = async (username) => {
    const response = await client.get(`/${username}`);
    return response.data;
};

export const userUpdate = async (userData) => {
    const response = await client.put(`/change/${userData.username}`, userData);
    console.log(response.data);
    return response.data;
};