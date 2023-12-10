"use client";
import React, {useEffect, useState} from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import * as client from "@/app/profile/client";
import {useSelector} from "react-redux";
import {router} from "next/navigation";
import {useRouter} from "next/navigation";
import ProfileSkillsList from "@/components/features/Profile/ProfileSkillsList";

export default function EditProfile() {

    const user = useSelector(state => state.auth.user);
    // if user === null => redirect to login page
    const router = useRouter();
    const [userData, setUserData] = useState({
    
    });

    const handleButtonClick = () => {
        //router.push('/profile'); // Replace '/profile' with the path to your profile page
    };
    const fetchUser = async () => {
        try {
            const userProfile = await client.userProfile("Ashely_lin");
            setUserData(userProfile);
        } catch (error) {
            console.error(error)
        }
    }

    const updateUser = async() => {
        try {
            const updatedUser = await client.userUpdate(userData);
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
                                   onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.password}
                                   onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input className ="form-control"
                                   type="email"
                                   value={userData?.email}
                                   onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Cellphone</label>
                            <input className ="form-control"
                                   type="text"
                                   value={userData?.cellphone}
                                   onChange={(e) => setUserData({ ...userData, cellphone: e.target.value })}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>About</label>
                            <textarea className ="form-control"
                                   value={userData?.about}
                                      onChange={(e) => setUserData({ ...userData, about: e.target.value })}
                            />
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

                <ProfileSkillsList userData={userData}  />
                <ul className="list-group">
                    {userData?.skills && userData?.skills.map((skill, index) => (
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
                            <button className="btn btn-warning" style={{marginRight:'5px'}}>Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </li>
                    ))}
                </ul>
            </Row>
        </Container>
    );
}