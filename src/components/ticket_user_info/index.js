import "./user_info.css"
import React from 'react';
import { HiOutlineTicket } from 'react-icons/hi';
import { ImCalendar } from 'react-icons/im';
import { FiLoader } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';
import { GiEarthAmerica } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import * as client from "./client";

export default function UserInfo() {
    const currentDate = new Date().toISOString().split('T')[0]; 
    const [totalTickets, setTotalTickets] = useState(0);
    const [totalComplete, setTotalComplete] = useState(0);
    const [totalLoading, setTotalLoading] = useState(0);
    const [userLocation, setuserLocation] = useState('Fetching userLocation...');

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

    useEffect(() => {
        fetchTotalTicketCount();
        fetchTotalCompleteCount();
        fetchTotalLoadingCount();
        getuserLocation();
    }, []);

    return (
        <div className="user-container">
            <h5>Welcome! XXX</h5>
            <hr/>
            

            <div class="container text-left">
                <div class="row row-format ">
                    <div class="col">
                        <ImCalendar className="info-icon"/> Date: <br/> {currentDate}
                    </div>
                    <div class="col">
                        <HiOutlineTicket className="info-icon"/> Total Tickets: <br/> {totalTickets}
                    </div>
                </div>

                <div class="row row-format ">
                    <div class="col">
                        <TiTickOutline className="info-icon"/> Complete Tickets: <br/> {totalComplete}
                    </div>
                    <div class="col">
                        <FiLoader className="info-icon"/> Loading Tickets: <br/> {totalLoading}
                    </div>
                </div>

                <div class="row row-format ">
                    <div class="col">
                        <GiEarthAmerica className="info-icon"/> Current userLocation: <br/> {userLocation}
                    </div>
                    
                </div>

                <hr/>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2 tickets-button" type="button">Setting</button>
                    <button class="btn btn-primary tickets-button" type="button">Button</button>
                </div>
            </div>
        </div>
        
    )
}