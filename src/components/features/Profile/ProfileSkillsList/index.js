import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setUserData,
} from "@/lib/userDataReducer";
import * as client from "@/app/profile/client";

export default function ProfileSkillsList() {
    const dispatch = useDispatch();
    // State to manage the selected value (True or False)
    const [certificateValue, setCertificateValue] = useState('');
    const userData = useSelector(state => state.userData);
    const [newSkill, setNewSkill] = useState({
        name: '',
        proficiency: 'Please select',
        certified: false,
        issueDate: '',
        expirationDate: '',
    });

    const [editingSkillId, setEditingSkillId] = useState(null);
    const resetSkillForm = () => {
        setNewSkill({
            name: '',
            proficiency: 'Please select',
            certified: false,
            issueDate: '',
            expirationDate: '',
        });
        setEditingSkillId(null);
    };


    const handleAddSkill = async() => {
        console.log(newSkill);
        if (newSkill.name && newSkill.proficiency) {

            const updatedUser = await client.addSkill(userData, newSkill);
            dispatch(setUserData(updatedUser));

            // dispatch(createSkill(newSkill));
            resetSkillForm();
        }
    };

    const handleDeleteSkill = async (skillId) => {
        try {
            // console.log(skillId);
            const updatedUser = await client.deleteSkill(userData.username, skillId);
            dispatch(setUserData(updatedUser));
        } catch (error) {
            console.error('Could not delete the skill', error);
        }
    };

    const handleUpdateSkill = async () => {
        if (editingSkillId && newSkill.name && newSkill.proficiency !== 'Please select') {
            try {
                console.log(newSkill)
                const updatedUser = await client.updateSkill(userData.username, editingSkillId, newSkill);
                dispatch(setUserData(updatedUser));
                resetSkillForm();
            } catch (error) {
                console.error('Error updating skill:', error);
            }
        }
    };



    return (
        <div className="mb-5">
            <div className="input-group mb-3">
                <span className="input-group-text" id="skillNameLabel">
                  Skill Name
                </span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Skill Name"
                    aria-describedby="skillNameLabel"
                    value={newSkill.name}
                    onChange={(e) =>
                        setNewSkill({ ...newSkill, name: e.target.value })
                    }
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="proficiencyLabel">
                  Proficiency
                </span>
                <select
                    className="form-select"
                    aria-label="Proficiency"
                    value={newSkill.proficiency}
                    onChange={(e) =>
                        setNewSkill({ ...newSkill, proficiency: e.target.value })
                    }
                >
                    <option value="Please select">Please select</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="form-group mb-3">
                <label>Do you have a certificate?</label>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="certificateTrue"
                        name="certificate"
                        value="true"
                        checked={newSkill.certified}
                        onChange={() =>
                            setNewSkill({ ...newSkill, certified: true })
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="certificateTrue"
                    >
                        True
                    </label>
                </div>

                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="certificateFalse"
                        name="certificate"
                        value="false"
                        checked={!newSkill.certified}
                        onChange={() =>
                            setNewSkill({ ...newSkill, certified: false })
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="certificateFalse"
                    >
                        False
                    </label>
                </div>
            </div>

            {newSkill.certified && (
                <div id="dateInputs" className="mb-3">
                    <div className="form-group">
                        <label htmlFor="issueDate">Issue Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="issueDate"
                            name="issueDate"
                            value={newSkill.issueDate}
                            onChange={(e) =>
                                setNewSkill({ ...newSkill, issueDate: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expirationDate">Expiration Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="expirationDate"
                            name="expirationDate"
                            value={newSkill.expirationDate}
                            onChange={(e) =>
                                setNewSkill({ ...newSkill, expirationDate: e.target.value })
                            }
                        />
                    </div>
                </div>
            )}

            <button className="btn btn-success w-25" style={{ marginRight: '5px' }} onClick={handleAddSkill}>
                Add
            </button>
            <button className="btn btn-primary w-25" onClick={handleUpdateSkill}>Update</button>

            <ul className="list-group">
                {userData?.skills && userData?.skills.map((skill, index) => (
                    <li key={skill._id} className="list-group-item ">
                        <div className="d-flex w-100 justify-content-between">
                            <h5>{skill.name}</h5>
                            {skill.certified &&
                                <>
                                    <small className='text-muted'>
                                        <p>Certified {new Date(skill.certificationIssueDate).toLocaleDateString()}</p>
                                    </small>
                                </>
                            }
                        </div>
                        <p>Proficiency: {skill.proficiency}</p>
                        <button className="btn btn-warning" style={{marginRight:'5px'}}
                            onClick={() => {
                            setNewSkill({
                            name: skill.name,
                            proficiency: skill.proficiency,
                            certified: skill.certified,
                            issueDate: skill.issueDate || '',
                            expirationDate: skill.expirationDate || '',
                        });
                            setEditingSkillId(skill._id);
                        }}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleDeleteSkill(skill._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}
