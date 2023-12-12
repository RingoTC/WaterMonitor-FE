"use client";
import "./signup.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/auth";
import { useRouter } from 'next/navigation';
import * as client from "./client";
import Link from "next/link";
import axios from 'axios';
import Alert from "react-bootstrap/Alert";
export default function SingUp() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        username:"" , password:"" , firstName:"",
        lastName:"" , email: "", role: "REPORTER" ,
        company:"n/a.", cellphone:"",
        city: "", country:"", like: {}});
    const [users, setUsers] = useState([]);


    // const signup = async () => {
    //     try {
    //         const newUser = await client.signup(user);
    //         setUsers([newUser, ...users]);
    //         router.push(`/home`);
    //     } catch (err) {
    //         setError(err.response.data.message);
    //     }
    // };
    const signup = async (event) => {
        const USERS_API = `http://localhost:9000/auth`;
        event.preventDefault();
        try {
            const response = await axios.post(
                `${USERS_API}/register`, user);
            const newUser = response.data;
            setUsers([newUser, ...users]);
            router.push(`/home`);
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else if (err.request) {
                setError('Error registering user');
            } else {
                setError('Error setting up the request');
            }
        }
    };


    return(
        <div className="home p-0">
            <div className="signup-container-fluid">
                <div className="signup-container-inside">
                    <h3 className="signup-title">Sign Up for WaterMonitor</h3>
                    <hr/>
                    {error && <Alert variant={"danger"} >{error}</Alert>}
                    <form className="row g-3 needs-validation" onSubmit={signup} noValidate>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Username</label>
                            <input
                                className="form-control mb-3"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                type="text"
                                id="validationCustom01" required
                            />

                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label
                                htmlFor="validationCustom02"
                                className="form-label"
                            >
                                First name
                            </label>
                            <input value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                type="text"
                                className="form-control"
                                id="validationCustom02" required
                            />
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label
                                htmlFor="validationCustomUsername"
                                className="form-label"
                            >
                                Last Name
                            </label>
                            <div className="input-group has-validation">
                            {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend" required
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            </div>
                        </div>



                        <div className="col-md mb-3">
                            <div className="form-floating">
                                <input
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="email"
                                    className="form-control"
                                    id="floatingInputGrid"
                                    placeholder="name@example.com" required
                                />
                                <label htmlFor="floatingInputGrid">Email address</label>
                            </div>
                        </div><br/>

                        <div className="col-md mb-3">
                            <div className="form-floating">
                                <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option value="REPORTER" selected>Reporter</option>
                                    <option value="ADMIN">User Administrator</option>
                                    <option value="MANAGER">Manager</option>
                                </select>
                                <label htmlFor="floatingSelect">Account Type</label>
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Company: </label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" value={user.company}
                                    onChange={(e) => setUser({ ...user, company: e.target.value })} required></input>
                            </div>
                        </div>
                        <div className="row ">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" value={user.cellphone}
                                    onChange={(e) => setUser({ ...user, cellphone: e.target.value })} >Cell Phone</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3"></input>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-sm-7">
                                <input type="text" className="form-control" placeholder="City" aria-label="City"
                                        value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })}></input>
                            </div>
                            <div className="col-sm">
                                <input type="text" className="form-control" placeholder="Country" aria-label="Country"
                                        value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })}></input>
                            </div>
                        </div>


                        <div className="col-12 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                            </div>
                            <div className="col-auto">
                                <input
                                    className="form-control"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="password"
                                    id="inputPassword6"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                            <div className="col-auto">
                                <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                            </div>
                        </div>

                        <div className="col-12 button-container">
                            <button className="btn btn-primary signup-submission-button-submit" type="submit" onClick={signup}>Submit form</button>
                            <button className="btn btn-danger signup-submission-button-cancel" type="cancel"><Link href={"login"}>Cancel</Link></button>
                        </div>



                        </form>

                </div>
            </div>
        </div>
    );
}