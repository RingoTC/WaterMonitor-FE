import React, {useEffect, useState} from 'react';
import {
    AdvancedMarker,
    InfoWindow, Pin,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { useDispatch, useSelector } from "react-redux";
import {fetchRecords} from "@/lib/record";
import "./maps.css";
import Link from "next/link";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from 'react-bootstrap/Spinner';

const API_BASE = process.env.REACT_APP_BACKEND || "http://localhost:9000";
const MarkerWithInfowindow = ({initialPosition, Description, monitorID}) => {
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();
    const dispatch = useDispatch();
    const current = useSelector(state => state.records.records.find(record => record.MonitoringLocationIdentifier === monitorID));
    const [introduction, setIntroduction] = useState("We are asking openai for more information...");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(fetchRecords());
    },[dispatch])

    const changeBGColor = (pH) => {
        if(pH >= 6.5 && pH <= 7.5){
            return '#00FF00'
        }else if(pH >= 7.5 && pH < 8.0){
            return '#FFFF00'
        }else if (pH >= 8.0){
            return '#FF0000'
    }}

    const fetchDescription = async (description) => {
        const response = await fetch(`${API_BASE}/openai/${description}`);
        const data = await response.json();
        setIntroduction(data.data);
        setLoading(true);
        return data.data;
    }

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                onClick={() => {
                    setInfowindowOpen(true);
                    fetchDescription(Description).then(r => console.log(r));

                }}
                position={initialPosition}
            >

                <Pin
                    background={current ? changeBGColor(current.pH_Value) : '#000'}
                    glyphColor={'#000'}
                    borderColor={'#000'}
                    scale={0.8}
                />
            </AdvancedMarker>
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={400}
                    onCloseClick={() => {
                        setInfowindowOpen(false)
                    }}>
                    <div className="text-start">
                        <p>{Description}</p>
                        {current ? (
                            <ListGroup style={{ margin: '10px' , lineHeight:'16px', fontSize:'16px'}}>
                                <ListGroup.Item>
                                    pH: {current.pH_Value}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    DO: {current.DO_Value}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    NH4N: {current.NH4N_Value}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    COD: {current.COD_Value}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Update Date: {current.EstimatedDate}
                                </ListGroup.Item>
                            </ListGroup>
                        ) : (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )}
                        {loading ? (
                            <Alert style={{ margin: '10px', fontSize:'16px' }} variant={"info"}>
                                <p>{introduction}</p>
                            </Alert>
                        ) : (
                            <Alert style={{ margin: '10px',fontSize:'16px' }} variant={"success"}>
                                <p>{introduction}</p>
                            </Alert>
                        )}
                        <Link href={`/tickets`}>Submit a Ticket</Link>
                    </div>

                </InfoWindow>
            )}
        </>
    );
};

export default MarkerWithInfowindow;