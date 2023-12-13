import "./user_info.css"
import React from 'react';
import { HiOutlineTicket } from 'react-icons/hi';
import { ImCalendar } from 'react-icons/im';
import { FiLoader } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';
import { GiEarthAmerica } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import * as client from "./client";
import { logoutUser } from "@/lib/auth";

export default function UserInfo() {
    const user = useSelector(state => state.auth.user);
    const currentDate = new Date().toISOString().split('T')[0]; 
    const [totalTickets, setTotalTickets] = useState(0);
    const [totalComplete, setTotalComplete] = useState(0);
    const [totalLoading, setTotalLoading] = useState(0);
    const [userLocation, setuserLocation] = useState('Fetching userLocation...');
    const [isEditable, setIsEditable] = useState(false);
    const [reminder, setReminder] = useState(user.reminder);
    const dispatch = useDispatch();
    const router = useRouter();
    
    const handleSave = async () => {
        await client.updateUserReminder(user.username, reminder);
        setIsEditable(false);
    };

    const handleUpdate = () => {
        setIsEditable(true); 
    };

    // const handleSave = () => {
    //     setIsEditable(false);
    // };

    const handleChange = (e) => {
        setReminder(e.target.value); 
    };

    const fetchTotalTicketCount = async () => {
        const totalTickets = await client.findTotalTickets();
        setTotalTickets(totalTickets.count);
    };

    const fetchTotalCompleteCount = async () => {
        const totalComplete = await client.findTotalComplete();
        setTotalComplete(totalComplete.count);
    };

    const fetchTotalLoadingCount = async () => {
        const totalLoading = await client.findTotalLoading();
        setTotalLoading(totalLoading.count);
    };

    const getuserLocation = () => {
        if (navigator.geouserLocation) {
            navigator.geouserLocation.getCurrentPosition(showPosition, showError);
        } else { 
            setuserLocation("GeouserLocation is not supported by this browser.");
        }
    }

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setuserLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    const showError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                setuserLocation("User denied the request for GeouserLocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setuserLocation("userLocation information is unavailable.");
                break;
            case error.TIMEOUT:
                setuserLocation("The request to get user userLocation timed out.");
                break;
            default:
                setuserLocation("An unknown error occurred.");
                break;
        }
    }
  

    const handleLogout = () => {
        dispatch(logoutUser())
            .then(() => {
                router.push('/login');
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
    };

    useEffect(() => {
        fetchTotalTicketCount();
        fetchTotalCompleteCount();
        fetchTotalLoadingCount();
        getuserLocation();
        setReminder(user.reminder);
    }, [user.reminder]);

    console.log("Updating reminder for user:", user.username, "New reminder:", reminder);

  
    return (
        <div className="user-container">
            {user && (
                <h5>Welcome, {user.firstName} {user.lastName} ({user.role})</h5>
            )}
            <button onClick={handleLogout} className="btn btn-danger buttom-align mb-3">Sign Out</button>
            <hr/>
            

            <div className="container text-left">
                <div className="row row-format ">
                    <div className="col">
                        <ImCalendar className="info-icon"/> Date: <br/> {currentDate}
                    </div>
                    <div className="col">
                        <HiOutlineTicket className="info-icon"/> Total Tickets: <br/> {totalTickets}
                    </div>
                </div>

                <div className="row row-format ">
                    <div className="col">
                        <TiTickOutline className="info-icon"/> Complete Tickets: <br/> {totalComplete}
                    </div>
                    <div className="col">
                        <FiLoader className="info-icon"/> Loading Tickets: <br/> {totalLoading}
                    </div>
                </div>

                <div className="row row-format ">
                    <div className="col">
                        <GiEarthAmerica className="info-icon"/> Current userLocation: <br/> {userLocation}
                    </div>
                    
                </div>

                <div className="row row-format ">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="reminder" className="form-label">Reminder:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="reminder" 
                                value={reminder}
                                onChange={handleChange}
                                disabled={!isEditable} 
                            />
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2 tickets-button" type="button" onClick={handleUpdate}>Update</button>
                    <button className="btn btn-success tickets-button" type="button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
        
    )
}