const TicketDetails = ({ ticket }) => {
    return (
        <div className="container mt-4 mb-5">
            <h2>Ticket Details</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-text">Monitoring Location: {ticket.MonitoringLocationIdentifier}</h5>
                    <p className="card-text"><strong>Longitude:</strong> {ticket.LongitudeMeasure}</p>
                    <p className="card-text"><strong>Latitude:</strong> {ticket.LatitudeMeasure}</p>
                    <p className="card-text"><strong>Date:</strong> {ticket.MonitoringDate}</p>

                    <h5>Indicators</h5>

                    <p className="card-text"><strong>Name:</strong> {ticket.IndicatorsName}</p>
                    <p className="card-text"><strong>Value:</strong> {ticket.Value}</p>
                    <p className="card-text"><strong>Unit:</strong> {ticket.Unit}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;