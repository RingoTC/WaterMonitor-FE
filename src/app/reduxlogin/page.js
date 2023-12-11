"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/auth";
import { useRouter } from 'next/navigation';
import "./login.css"

const ReduxLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.auth.errorMessage);
    const user = useSelector(state => state.auth.user);
    const router = useRouter();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(loginUser(username, password));
    // };
    
    useEffect(() => {
        if (user) {
            router.push('/tickets'); 
        }
    }, [user, router]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser(username, password));
    };

    useEffect(() => {
        // Check if user is authenticated
        if (user) {
            // Redirect to the profile page
            router.push('/profile');
        }
    }, [user]);
 
    return (
        <div className="home p-0">
            
                    {user ? (
                        <div>

                        </div>
                    ) : (
                        <div className="container-fluid login-container-fluid">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <img src="images/login.png" className="left-half" alt="..."/>
                                </div>
                                <div className="col-md-6 login-container">
                                    <h2 className="login-title">Let&apos;s Log In!</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label"><b>Username</b></label>
                                            <input
                                                className="form-control" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp"
                                                value={username}
                                                onChange={e => setUsername(e.target.value)}
                                                type="text"
                                                placeholder="Enter your username"
                                            />
                                            <div id="emailHelp" className="form-text">Username, Phone Number or Email</div>
                                        </div>

                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label"><b>Password</b></label>
                                            <input
                                                className="form-control" id="exampleInputPassword1" 
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                type="password"
                                            />
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button className="btn btn-primary login-button" type="submit">Log in</button>
                                        
                                        </div>
                                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                    </form>

                                    <div className="login-signup">Don&apos;t have an account?
                                        <a href="/signup"> Sign Up</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
      
                    )}
         </div>
           
    );
}

export default ReduxLogin;
