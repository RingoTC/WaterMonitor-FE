import React, {useEffect, useState} from 'react';
import {
    AdvancedMarker,
    InfoWindow, Pin,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {fetchRecords} from "@/lib/record";
import "./maps.css";
import Link from "next/link";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from 'react-bootstrap/Spinner';
import {Button, InputGroup, Form, Table} from "react-bootstrap";
import {fetchMaps, updateFetchMaps} from "@/lib/maps";

const API_BASE = process.env.REACT_APP_BACKEND || "http://localhost:9000";
const MarkerWithInfowindow = ({initialPosition, Description, monitorID}) => {
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();
    const dispatch = useDispatch();
    const current = useSelector(state => state.records.records.find(record => record.MonitoringLocationIdentifier === monitorID));
    const [introduction, setIntroduction] = useState("We are asking openai for more information...");
    const [loading, setLoading] = useState(false);
    const [editablePH, setEditablePH] = useState(current ? current.pH_Value : '');
    const [editableDO, setEditableDO] = useState(current ? current.DO_Value : '');
    const [editableNH4N, setEditableNH4N] = useState(current ? current.NH4N_Value : '');
    const [editableCOD, setEditableCOD] = useState(current ? current.COD_Value : '');
    const [infoID, setInfoID] = useState(current ? current._id : '0');


    useEffect(() => {
        dispatch(fetchRecords());
    },[dispatch])

    const user = useSelector(state => state.auth.user);

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

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_BASE}/site/delete`, {
                data: { MonitoringLocationIdentifier: monitorID },
            });

            // 重新获取最新的站点数据
            dispatch(updateFetchMaps());

            // 关闭当前弹窗
            setInfowindowOpen(false);

            console.log('Site deleted successfully:', response.data);
        } catch (error) {
            alert('Error deleting site:', error.message);
        }
    };

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
                    onCloseClick={() => {
                        setInfowindowOpen(false)
                    }}>
                    <div className="text-start" style={{"width":"300px"}}>
                        <p>{Description}</p>
                        {current ? (
                            <Table striped bordered hover style={{ lineHeight: '16px', fontSize: '14px' }}>
                                <tbody>
                                <tr>
                                    <td><strong>pH:</strong></td>
                                    <td>{current.pH_Value}</td>
                                </tr>
                                <tr>
                                    <td><strong>DO:</strong></td>
                                    <td>{current.DO_Value}</td>
                                </tr>
                                <tr>
                                    <td><strong>NH4N:</strong></td>
                                    <td>{current.NH4N_Value}</td>
                                </tr>
                                <tr>
                                    <td><strong>COD:</strong></td>
                                    <td>{current.COD_Value}</td>
                                </tr>
                                {/* ... (other properties) */}
                                </tbody>
                            </Table>
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
                        <div className="action">
                            <Button variant="primary"><Link href={`/tickets`} style={{"color":"#fff","textDecoration":"none"}}>Submit a Ticket</Link></Button>
                            {user && user.role === 'ADMIN' && <Button variant="danger" onClick={handleDelete}>Delete</Button>}
                        </div>
                    </div>

                </InfoWindow>
            )}
        </>
    );
};

export default MarkerWithInfowindow;