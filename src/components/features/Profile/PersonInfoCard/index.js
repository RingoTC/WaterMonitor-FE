"use client";
import ProfileImage from '@/components/features/Profile/ProfileImage'
import {FaDroplet} from "react-icons/fa6";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMapLocation} from "react-icons/gr";
import Image from 'next/image';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "@/lib/auth";
import * as client from "@/app/profile/client";

export default function PersonInfoCard() {
    const userData = useSelector(state => state.userData);

    return (
        <div>
            <div className='container mt-5' style={{lineHeight:'2.6'}}>
            <div className='row justify-content-center'>
                <div className='bg-light col-12 col-lg-10'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-12 col-lg-3 mt-5 mb-5 text-center'>
                            <ProfileImage />
                            <h2>{userData?.username}</h2>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4 text-left border-end'>

                            <span>First Name: {userData?.firstName}</span>
                            <br />
                            <span>Last Name: {userData?.lastName}</span>
                            <br />
                            <span>Position: {userData?.position}</span>
                            <br />
                            <FaDroplet color={'blue'}/>
                            <span>Company: {userData?.company}</span>
                            <br />
                            <AiOutlineMail/>
                            <span>Email: {userData?.email}</span>
                            <br />
                            <BsFillTelephoneFill/>
                            <span>Cellphone: {userData?.cellphone}</span>
                            <br />
                            <GrMapLocation/>
                            <span>Location: {userData?.city},{userData?.country}</span>

                        </div>
                        <div className='col-12 col-md-12 col-lg-5 text-left'>
                            <p>About: {userData?.about}</p>

                            <a href={'/profile/editProfile'} className='btn btn-primary mt-3 d-none d-md-block' style={{ width: '200px' }}>Update Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};