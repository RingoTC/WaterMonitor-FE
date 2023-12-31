"use client";
import ProfileImage from '@/components/features/Profile/ProfileImage'
import {FaDroplet} from "react-icons/fa6";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMapLocation} from "react-icons/gr";
import Image from 'next/image';
import {useEffect, useState ,useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "@/lib/auth";
import * as client from "@/app/profile/client";
import Link from "next/link";
import {Button} from "react-bootstrap";
import axios from "axios";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


export default function PersonInfoCard({userData}) {

    const likeAPI = process.env.NEXT_PUBLIC_BACKEND + '/user/like';
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipTarget = useRef(null);
    const [tooltipText, setTooltipText] = useState('Loading...');

    function handleLike() {
        const likedUser = userData.username;

        axios
            .get(likeAPI, {
                params: {
                    likedUsername: likedUser,
                },
                withCredentials: true,
            })
            .then((response) => {
                setTooltipText(response.data.message)
                setShowTooltip(true);

                setTimeout(() => {
                    setShowTooltip(false);
                }, 3000);
            })
            .catch((error) => {
                setTooltipText(error)
                setShowTooltip(true);

                setTimeout(() => {
                    setShowTooltip(false);
                }, 3000);
            });
    }


    return (
        <div className={"m-3"}>
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
                            <Button ref={tooltipTarget} onClick={handleLike}>
                                Like This Person
                            </Button>
                            <Overlay target={tooltipTarget.current} show={showTooltip} placement="right">
                                {(props) => (
                                    <Tooltip id="overlay-example" {...props}>
                                        {tooltipText}
                                    </Tooltip>
                                )}
                            </Overlay>
                            <Link href={'/profile/editProfile'} className='btn btn-primary mt-3 d-none d-md-block' style={{ width: '200px' }}>Edit My Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
};