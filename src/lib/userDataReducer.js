const initialState = {
    _id: '',
    username: '',
    password: '',
    position: '',
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
    city: '',
    country: '',
    role: '',
    about: '',
    skills: [],
    likes: [],
};

const SET_USER_DATA = 'SET_USER_DATA';
const CREATE_SKILL = 'CREATE_SKILL';
const UPDATE_SKILL = 'UPDATE_SKILL';
const DELETE_SKILL = 'DELETE_SKILL';

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData,
});

export const createSkill = (skill) => ({
    type: CREATE_SKILL,
    payload: skill,
});

export const updateSkill = (skill) => ({
    type: UPDATE_SKILL,
    payload: skill,
});

export const deleteSkill = (skillId) => ({
    type: DELETE_SKILL,
    payload: skillId,
});

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...action.payload };
        case CREATE_SKILL:
            return {
                ...state,
                skills: [...state.skills, action.payload],
            };
        case UPDATE_SKILL:
            return {
                ...state,
                skills: state.skills.map((skill) =>
                    skill.id === action.payload.id ? action.payload : skill
                ),
            };
        case DELETE_SKILL:
            return {
                ...state,
                skills: state.skills.filter((skill) => skill.id !== action.payload),
            };
        default:
            return state;
    }
};

export default userDataReducer;