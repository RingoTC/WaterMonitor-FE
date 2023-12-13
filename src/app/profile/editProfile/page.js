"use client";
import React, {useEffect, useState} from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import * as client from "@/app/profile/client";
import {useDispatch, useSelector} from "react-redux";
import {router} from "next/navigation";
import Link from 'next/link';

import {useRouter} from "next/navigation";
import ProfileSkillsList from "@/components/features/Profile/ProfileSkillsList";
import {setUserData} from "@/lib/userDataReducer";

export default function EditProfile() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page
    const router = useRouter();
    // const [userData, setUserData] = useState({
    // });
    const userData = useSelector(state => state.userData);


    const handleButtonClick = () => {
        router.push('/profile');
    };
    const fetchUser = async () => {
        try {
            const userProfile = await client.userProfile(user.username);
            // setUserData(userProfile);
            dispatch(setUserData(userProfile));
        } catch (error) {
            console.error(error)
        }
    }

    const updateUser = async() => {
        try {
            const updatedUser = await client.userUpdate(userData);
            dispatch(setUserData(updatedUser));
            handleButtonClick();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <Container className='mt-5 '>
            <Row className="mb-5" >
                <Col md={12} className='bg-light p-4'>
                    <h1>Personal Information</h1>
                    <form >
                        <div className="form-group mb-3">
                            <label>User Name</label>
                            <input className ="form-control"
                                type="text"
                                value={userData?.username}
                                   onChange={(e) => dispatch(setUserData({ ...userData, username: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Position</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.position}
                                   onChange={(e) => dispatch(setUserData({ ...userData, position: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Company</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.company}
                                   onChange={(e) => dispatch(setUserData({ ...userData, company: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input className ="form-control"
                                   type="email"
                                   value={userData?.email}
                                   onChange={(e) => dispatch(setUserData({ ...userData, email: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Cellphone</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.cellphone}
                                   onChange={(e) => dispatch(setUserData({ ...userData, cellphone: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>City</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.city}
                                   onChange={(e) => dispatch(setUserData({ ...userData, city: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Country</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.country}
                                   onChange={(e) => dispatch(setUserData({ ...userData, country: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>About</label>
                            <textarea className ="form-control"
                                   value={userData?.about}
                                      onChange={(e) => dispatch(setUserData({ ...userData, about: e.target.value }))}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Role</label>
                            <select
                                className="form-control"
                                value={userData?.role}
                                onChange={(e) => dispatch(setUserData({ ...userData, role: e.target.value }))}
                            >
                                <option value="REPORTER">REPORTER</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="VIEWER">VIEWER</option>
                            </select>
                        </div>



                        <Button style={{marginRight:'5px'}} onClick={updateUser}>
                            Update
                        </Button>

                        <Button  onClick={handleButtonClick}>
                            Cancel
                        </Button>
                    </form>
                </Col>
            </Row>

            <Row className='bg-light p-4'>
                <h1>Skills</h1>

                <ProfileSkillsList/>

            </Row>
        </Container>
    );
}