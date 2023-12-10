"use client";
import {GiTicket} from "react-icons/gi";
import TicketDetails from '../../../components/ticket_details';
import "../tickets.css"
import { useState } from "react";
// import { useRouter } from 'next/router';
import * as client from "../client";

export default function Tickets() {
    const ticket = {
        MonitoringLocationIdentifier: '394',
        LongitudeMeasure: '121.3',
        LatitudeMeasure: '40.27',
        MonitoringDate: '1/8/2017',
        IndicatorsName: 'pH',
        Value: '8.18',
        Unit: 'N/A'
    };

    // const router = useRouter();// useNavigate instead of useHistory
    // const [ticketData, setTicketData] = useState({
    //     // Initialize your ticket data structure here
    //     // Example:
    //     MonitoringLocationIdentifier: '',
    //     MonitoringYear: '',
    //     MonitoringWeek: '',
    //     MonitoringLocationDescriptionText: '',
    //     EstimatedDate: '',
    //     IndicatorsName: '',
    //     status: ''
    // });

    // // ... rest of your component

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         // Logic to create a ticket
    //         const newTicket = await client.createTicket(ticketData);
    //         // After successful creation, navigate back to Ticket Page
    //         router('/tickets'); // Use navigate instead of history.push
    //     } catch (error) {
    //         console.error("Error creating ticket:", error);
    //         // Handle errors here
    //     }
    // };

    return(
        <div className="home p-0">
            <div className="container mb-5">
                <div className="row">

                    {/* <div className="col-12 tickets-top-nav">
                        <div className="col-12 d-flex justify-content-between">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Ticket</a></li>
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">123456789</li>
                                </ol>
                            </nav>
                        </div>
                        <hr />
                    </div> */}

                    <div className="col-12 bg-light ">

                        <TicketDetails ticket={ticket} />
                    </div>
                </div>


            </div>

        </div>

    );
}