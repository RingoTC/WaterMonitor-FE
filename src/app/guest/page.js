"use client";
import React, { useEffect, useState } from "react";
import PersonInfoCard from "@/components/features/Profile/PersonInfoCard";
import * as client from "@/app/profile/client";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import {useSelector} from "react-redux";

export default function Profile() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Use local state instead of Redux
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState(null);

    const givenUsername = searchParams.get('username');

    const auth = useSelector(state => state.auth);

    const fetchUser = async () => {
        try {
            // Fetch user profile using the API client
            const userProfile = await client.userProfile(givenUsername);
            setUserData(userProfile);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // Check if user is authenticated
        const authenticatedUser = auth.user;
        if (!authenticatedUser) {
            router.push('/login');
        } else {
            // Set the user state and fetch user data
            setUser(authenticatedUser);
            fetchUser();
        }
    }, []);

    return (
        <div className="row justify-content-between">
            <div>
                <PersonInfoCard userData={userData} />
                <div className="row justify-content-lg-center mt-5">
                    {/* ... (existing code) */}
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
