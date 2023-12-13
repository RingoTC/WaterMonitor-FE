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
import Link from "next/link";

export default function Profile() {
    const router = useRouter();
    const searchParams = useSearchParams();
    // Add a path parameter into this page
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page
    const userData = useSelector(state => state.userData);
    const [notMe, setNotMe] = useState([])
    // const [userData, setUserData] = useState({});

    const givenUsername = searchParams.get('username');

    const [likedUsers, setLikedUsers] = useState([]);


    //TODO: Fetch the user in the path param or if the path parameter == self, fetch yourself.
    const fetchUser = async () => {
        try {
               const userProfile = await client.userProfile( user.username);
               dispatch(setUserData(userProfile));
            // setUserData(userProfile);
        } catch (error) {
            console.error(error)
        }
    }

    const fetchLikedUsers = async () => {
        try {
            const likedUsers = await client.likedUsers(user.username);
            setLikedUsers(likedUsers);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }else{
            fetchLikedUsers();
            fetchUser();
        }
    }, [dispatch])


    return (

            <div className="row justify-content-between">
                {JSON.stringify(user)}
                    <div>
                        <PersonInfoCard userData={userData}/>
                        <div className="container">
                            <div className="row  justify-content-lg-center mt-5">
                                <div className="col-2 d-none d-lg-block col-lg-2 bg-light" style={{marginRight:'15px'}}>
                                    <h5 className='border-bottom mt-1'>Liked User</h5>
                                    <ul className="list-group">
                                        {likedUsers && likedUsers.map((user, index) => (
                                            <li key={index} className="list-group-item ">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <Link href={`/friends?username=${user.username}`}>{user.username}</Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-8 bg-light mb-5">

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

