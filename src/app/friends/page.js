"use client";
import './style.css'
import React, {useEffect, useState} from "react";
import PersonInfoCard from "@/components/features/Profile/PersonInfoCard";
import * as client from "@/app/profile/client";
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function Friends() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page
    const [OtherUserData, setOtherUserData] = useState({})

    const givenUsername = searchParams.get('username');



    const fetchUser = async () => {
        try {
               const userProfile = await client.userProfile(givenUsername);
               setOtherUserData(userProfile);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!user) {
                router.push('/login');
            } else {
                await fetchUser();
            }
        };

        fetchData();
    }, [dispatch, givenUsername, router, user]);


    return (

            <div className="row justify-content-between">
                <div>
                    {Object.keys(OtherUserData).length > 0 && (
                        <PersonInfoCard userData={OtherUserData} />
                    )}
                </div>
            </div>
    );
};

