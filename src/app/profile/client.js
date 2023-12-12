import Axios from 'axios';


const API_BASE = process.env.NEXT_PUBLIC_BACKEND;
const client = Axios.create({
    baseURL: `${API_BASE}/user`,
    withCredentials: true,
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

export const addSkill = async (userData, newSkill) => {
    try {
        const response = await client.post(`/change/${userData.username}`, {newSkill});
        return response.data;
    } catch (error) {
        console.error('Error adding skill:', error);
        throw error;
    }
};

export const deleteSkill = async (username, skillId) => {
    try {
        const response = await client.delete(`/change/${username}/skills/${skillId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting skill:', error);
        throw error;
    }
};

export const updateSkill = async (username, skillId, skillData) => {
    try {
        const response = await client.put(`/change/${username}/skills/${skillId}`, skillData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error updating skill:', error);
        throw error;
    }
};
