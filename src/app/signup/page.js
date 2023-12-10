"use client";
import "./signup.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/auth";
import * as client from "./client";

export default function SingUp() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        username:"" , password:"" , first_name:"", last_name:"" , email: "", role: "USER" });
    const [users, setUsers] = useState([]);
    // const createUser = async () => {
    //     try {
    //         const newUser = await client.createUser(user);
    //         setUsers([newUser, ...users]);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const signup = async () => {
        try {
            const newUser = await client.signup(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    console.log(user.username);
    console.log(user.password);
    console.log(user.first_name);
    console.log(user.last_name);
    console.log(users);
    console.log(user.role);
    
    return(
        <div className="home p-0">
            <div className="signup-container-fluid">
                <div className="signup-container-inside">
                    <h3 className="signup-title">Sign Up for WaterMonitor</h3>
                    <hr/>
                    {error && <div>{error}</div>}
                    <form class="row g-3 needs-validation" onSubmit={signup} novalidate>
                        <div class="col-md-4">
                            <label for="validationCustom01" class="form-label">Username</label>
                            <input 
                                className="form-control mb-3"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                type="text" 
                                id="validationCustom01" required
                            />
            
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label 
                                for="validationCustom02" 
                                className="form-label"
                            >
                                First name
                            </label>
                            <input value={user.first_name}
                                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                                type="text" 
                                class="form-control" 
                                id="validationCustom02"
                            />
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label 
                                for="validationCustomUsername" 
                                className="form-label"
                            >
                                Last Name
                            </label>
                            <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input 
                                value={user.last_name}
                                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                                type="text" 
                                className="form-control" 
                                id="validationCustomUsername" 
                                aria-describedby="inputGroupPrepend"
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            </div>
                        </div>
                        
                        <div class="col-md">
                            <div class="form-floating">
                                <input 
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    type="email" 
                                    className="form-control" 
                                    id="floatingInputGrid" 
                                    placeholder="name@example.com" 
                                />
                                <label for="floatingInputGrid">Email address</label>
                            </div>
                        </div><br/>
                       
                        <div class="col-md">
                            <div class="form-floating">
                                <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>User</option>
                                    <option value="User Administrator">User Administrator</option>
                                    <option value="System Administrator">System Administrator</option>
                                </select>
                                <label for="floatingSelect">Account Type</label>
                            </div>
                        </div>
                        


                        <div class="col-12 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Password</label>
                            </div>
                            <div class="col-auto">
                                <input 
                                    className="form-control"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    type="password" 
                                    id="inputPassword6" 
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div>
                        </div>

                        <div class="col-12 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Conform Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                            </div>
                        </div>
                        
                        <div class="col-12 button-container">
                            <button class="btn btn-primary signup-submission-button-submit" type="submit" onClick={signup}>Submit form</button>
                            <button class="btn btn-danger signup-submission-button-cancel" type="cancel"><a href="/reduxlogin">Cancel</a></button>
                        </div>

                        

                        </form>

                </div>
            </div>
        </div>
    );
}