"use client";
import TicketDetails from '../../../components/ticket_details';
import "../tickets.css";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as client from "../client";
import { useDispatch, useSelector } from "react-redux";

export default function Tickets() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const ticketId = searchParams.get('_id')
    const user = useSelector(state => state.auth.user);
    const [ticket, setTicket] = useState({
        MonitoringLocationIdentifier:"" , 
        LongitudeMeasure:"" , 
        LatitudeMeasure:"", 
        MonitoringYear:"" , 
        MonitoringWeek: "", 
        MonitoringLocationDescriptionText: "",
        IndicatorsName:"",
        Value: null,
        Unit: "",
        status: "loading",
        COD_Value: null,
        DO_Value: null,
        NH4N_Value: null,
        pH_Value:null

    });

    const deleteTicket = async (ticketToDeleteId) => {
        try {
            await client.deleteTicket(ticketToDeleteId);
            router.push('/tickets');
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setTicket({ ...ticket, [id]: value });
    };
    const [site, setSite] = useState({
        MonitoringLocationIdentifier:null,
        LongitudeMeasure:null,
        LatitudeMeasure:null,
        MonitoringLocationDescriptionText:""
    });
    const [sites, setSites] = useState([]);
    const updateTicketHandler = async () => {
        try {
            await client.updateTicket(ticketId, ticket);
            router.push('/tickets');
        } catch (error) {
            console.error('Error updating ticket:', error);
        }
    };
    const handleStatusChange = (e) => {
        setTicket({ ...ticket, status: e.target.checked ? "complete" : "loading" });
    };
    const handleChange = (e) => {
        const selectedSiteIdentifier =  Number(e.target.value);
        setTicket({ ...ticket, MonitoringLocationIdentifier: selectedSiteIdentifier });
        const selectedSite = sites.find(site => site.MonitoringLocationIdentifier === selectedSiteIdentifier);
        if (selectedSite) {
            setSite(selectedSite);
            setTicket({ 
                ...ticket, 
                MonitoringLocationDescriptionText:selectedSite.MonitoringLocationDescriptionText,
                MonitoringLocationIdentifier: selectedSite.MonitoringLocationIdentifier,
                LongitudeMeasure: selectedSite.LongitudeMeasure,
                LatitudeMeasure: selectedSite.LatitudeMeasure,
            });
        }
    };

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const fetchedTicket = await client.getTicketById(ticketId);
                setTicket(fetchedTicket); 
            } catch (error) {
                console.error('Error fetching ticket:', error);
            }
        };

        const fetchSites = async () => {
            const siteData = await client.findAllSites();
            setSites(siteData);
        };

        fetchTicketDetails();
        fetchSites();
    }, []);

    return(
        <div className="home p-0">
            <div className="container-fluid mb-5">
                <div className="row">

                    <div className="col-12 tickets-top-nav">
                        <div className="col-12 d-flex justify-content-between">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href={"/tickets"}>Ticket</Link></li>
                                    <li className="breadcrumb-item"><Link href={"/tickets"}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{searchParams}</li>
                                </ol>
                            </nav>
                        </div>
                        <hr />
                    </div>

                    <div className="col-12 bg-light ">
                        {/* <TicketDetails ticket={ticket} /> */}
                        <div className="container mt-4 mb-5">
                            <h2>Ticket Details</h2>
                            <div className="card">
                                <div className="card-body">
                                    <h4>Monitoring Site Information:</h4>
                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <select value={ticket.MonitoringLocationIdentifier} 
                                                    onChange={handleChange} 
                                                    className="form-select" id="floatingSelect" 
                                                    aria-label="Floating label select example"
                                            >
                                                <option value="">Select Site</option>
                                                {sites.map((site, index) => (
                                                    <option key={index} value={site.MonitoringLocationIdentifier}>{site.MonitoringLocationDescriptionText}</option>
                                                ))}
                                            </select>
                                            <label htmlFor="floatingSelect">Site Name</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="longitude" className="form-label">Longitude:</label>
                                        <input type="number" className="form-control" id="longitude" value={ticket.LongitudeMeasure} disabled></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="latitude" className="form-label">Latitude:</label>
                                        <input type="number" className="form-control" id="latitude" value={ticket.LatitudeMeasure} disabled></input>
                                    </div>

                                    <h4>Indicators</h4>
                                    <div className="mb-3">
                                        <label htmlFor="cod" className="form-label">COD Value:</label>
                                        <input type="number" className="form-control" id="COD_Value" value={ticket.COD_Value} onChange={handleInputChange}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="do" className="form-label">DO Value:</label>
                                        <input type="number" className="form-control" id="DO_Value" value={ticket.DO_Value} onChange={handleInputChange}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="nh4n" className="form-label">NH4N Value:</label>
                                        <input type="number" className="form-control" id="NH4N_Value" value={ticket.NH4N_Value} onChange={handleInputChange}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ph" className="form-label">pH Value:</label>
                                        <input type="number" className="form-control" id="pH_Value" value={ticket.pH_Value} onChange={handleInputChange}></input>
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="statusCheckbox" onChange={handleStatusChange} checked={ticket.status === 'complete'} />
                                            <label className="form-check-label" htmlFor="statusCheckbox">Status is: {ticket.status}</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <h3>reporter:</h3>
                                        {ticket?.reporter?.map((reporter, index) => (
                                            <Link className={"m-1"} href={"/friends?username=" + reporter} key={index}>
                                                {reporter}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="d-grid gap-2 d-md-block">
                                    {user && user.role !== 'VIEWER' && (
                                        <><button className="btn btn-success float-end mb-3 me-2 buttom-align"
                                                  type="button"
                                                  onClick={() => updateTicketHandler()}>
                                            Update Ticket
                                        </button>
                                            <button className="btn btn-danger float-end mb-3 me-2 buttom-align" type="button" onClick={() => deleteTicket(ticketId)}>Delete Ticket</button>
                                        </>
                                )}
                                    <Link href={"/tickets"} className="btn btn-primary float-end mb-3 me-2 buttom-align" type="button">Return Back</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


            </div>

        </div>

    );
}