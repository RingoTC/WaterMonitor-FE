"use client";
import './style.css'
import React, {useEffect, useState} from "react";
import ProfileSkillsList from "@/components/features/Profile/ProfileSkillsList";
import PersonInfoCard from "@/components/features/Profile/PersonInfoCard";
import * as client from "@/app/profile/client";
import {useSelector} from "react-redux";
export default function Profile() {

    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page

    const [userData, setUserData] = useState({
    });

    const fetchUser = async () => {
        try {
            const userProfile = await client.userProfile("Ashely_lin");
            setUserData(userProfile);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (

            <div className="row justify-content-between">

                {userData && (
                    <div>
                    <PersonInfoCard userData={userData} /> 
                        <div className="row  justify-content-lg-center mt-5">
                        <div className="col-2 col-lg-2 bg-light" style={{marginRight:'15px'}}>
                                <h5 className='border-bottom mt-1'>Report to</h5>
                                <br />
                                <h5 className='border-bottom'>Work Together With</h5>
                                <p>abc</p>
                        </div>
    
                        <div className="col-10 col-sm-12 col-lg-8 bg-light mb-5">
                            <div className="row">
    
                                <h3 className="mt-3">SKILLS</h3>
    
                                {/*<ProfileSkillsList />*/}
    
                                <ul className="list-group">
                                    {userData.skills && userData.skills.map((skill, index) => (
                                        <li key={index} className="list-group-item ">
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
                                        </li>
                                    ))}
                                </ul>
    
                            </div>
                        </div>
                    </div>
                    </div>
                )}

            </div>
    );
};

