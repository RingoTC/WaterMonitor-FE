"use client";
import './style.css'
import React, {useEffect, useState} from "react";
import ProfileSkillsList from "@/components/features/Profile/ProfileSkillsList";
import PersonInfoCard from "@/components/features/Profile/PersonInfoCard";
import * as client from "@/app/profile/client";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "@/lib/userDataReducer";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

export default function Profile() {
    const router = useRouter();
    const searchParams = useSearchParams();
    // Add a path parameter into this page
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page
    const userData = useSelector(state => state.userData);
    // const [userData, setUserData] = useState({});

    const givenUsername = searchParams.get('username');


    //TODO: Fetch the user in the path param or if the path parameter == self, fetch yourself.
    const fetchUser = async () => {
        try {
               const userProfile = await client.userProfile(user.username);
               dispatch(setUserData(userProfile));
            // setUserData(userProfile);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }else{
            fetchUser();
        }
    }, [dispatch])

    return (

            <div className="row justify-content-between">

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

            </div>
    );
};

