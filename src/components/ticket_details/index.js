import React, { useState, useEffect } from "react";
import * as client from "./client";

const TicketDetails = ({ currentTicket }) => {
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
        COD: null,
        DO_Value: null,
        NH4N_Value: null,
        pH_Value:null

    });
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
        const fetchSites = async () => {
            const siteData = await client.findAllSites();
            setSites(siteData);
        };

        fetchSites();
    }, []);

    return (
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
                        <input type="number" className="form-control" id="COD" value={ticket.COD_Value} onChange={handleInputChange}></input>
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
                        <label htmlFor="indicatorName" className="form-label">Indicator Name:</label>
                        <input type="email" className="form-control" id="indicatorName" value={ticket.IndicatorsName} onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="indicatorValue" className="form-label">Indicator Value:</label>
                        <input type="number" className="form-control" id="indicatorValue" value={ticket.value} onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="indicatorUnit" className="form-label">Indicator Unit:</label>
                        <input type="email" className="form-control" id="indicatorUnit" value={ticket.Unit} onChange={handleInputChange}></input>
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="statusCheckbox" onChange={handleStatusChange} />
                            <label className="form-check-label" htmlFor="statusCheckbox">Status is: {ticket.status}</label>
                        </div>
                    </div>
                </div>

                <button className="btn btn-danger me-2">Delete</button>
            </div>
        </div>
    );
};

export default TicketDetails;