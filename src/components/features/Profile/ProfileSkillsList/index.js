import React, { useState } from 'react';

export default function ProfileSkillsList({userData}) {
    // State to manage the selected value (True or False)
    const [certificateValue, setCertificateValue] = useState('');

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
                    onChange={(e) => setUserData({ ...userData, cellphone: e.target.value })}
                />
            </div>

            <div className="input-group mb-3">
        <span className="input-group-text" id="proficiencyLabel">
          Proficiency
        </span>
                <select className="form-select" aria-label="Proficiency">
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
                        checked={certificateValue === 'true'}
                        onChange={() => setCertificateValue('true')}
                    />
                    <label className="form-check-label" htmlFor="certificateTrue">True</label>
                </div>

                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="certificateFalse"
                        name="certificate"
                        value="false"
                        checked={certificateValue === 'false'}
                        onChange={() => setCertificateValue('false')}
                    />
                    <label className="form-check-label" htmlFor="certificateFalse">False</label>
                </div>
            </div>

            {certificateValue === 'true' && (
                <div id="dateInputs" className="mb-3">
                    <div className="form-group">
                        <label htmlFor="issueDate">Issue Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="issueDate"
                            name="issueDate"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expirationDate">Expiration Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="expirationDate"
                            name="expirationDate"
                        />
                    </div>
                </div>
            )}

            <button className="btn btn-success w-25" style={{marginRight:'5px'}}>Add</button>
            <button className="btn btn-primary w-25">Update</button>

        </div>
    );
}
