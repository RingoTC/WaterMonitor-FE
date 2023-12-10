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
import {Button, InputGroup, Form} from "react-bootstrap";
import {fetchMaps, updateFetchMaps} from "@/lib/maps";

const API_BASE = process.env.REACT_APP_BACKEND || "http://localhost:9000";
const MarkerWithInfowindow = ({initialPosition, Description, monitorID}) => {
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();
    const dispatch = useDispatch();
    const current = useSelector(state => state.records.records.find(record => record.MonitoringLocationIdentifier === monitorID));
    const [introduction, setIntroduction] = useState("We are asking openai for more information...");
    const [loading, setLoading] = useState(false);
    const [editablePH, setEditablePH] = useState(current ? current.pH_Value : 'Login to view');
    const [editableDO, setEditableDO] = useState(current ? current.DO_Value : 'Login to view');
    const [editableNH4N, setEditableNH4N] = useState(current ? current.NH4N_Value : 'Login to view');
    const [editableCOD, setEditableCOD] = useState(current ? current.COD_Value : 'Login to view');
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

    const handleEdit = async () => {
        try {
            console.log('Editable pH in handleEdit:', editablePH);
            const response = await axios.put(`${API_BASE}/record/updateLatest/${monitorID}`, {
                _id: infoID,
                pH: editablePH,   // 使用状态中的新值
                DO: editableDO,   // 使用状态中的新值
                NH4N: editableNH4N, // 使用状态中的新值
                COD: editableCOD,   // 使用状态中的新值
            });
            dispatch(fetchRecords());
            alert('Record updated successfully:',JSON.stringify( response.data));
        } catch (error) {
            alert('Error updating record:', JSON.stringify(error.message));
        }
    };



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
                    maxWidth={400}
                    onCloseClick={() => {
                        setInfowindowOpen(false)
                    }}>
                    <div className="text-start">
                        <p>{Description}</p>
                        {current ? (
                            <ListGroup style={{ margin: '10px', lineHeight: '16px', fontSize: '16px' }}>
                                <ListGroup.Item>
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Text id="pH-addon">pH:</InputGroup.Text>
                                        <Form.Control
                                            aria-label="pH"
                                            aria-describedby="pH-addon"
                                            type="text"
                                            value={editablePH}
                                            onChange={(e) => setEditablePH(e.target.value)}
                                        />
                                    </InputGroup>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Text id="DO-addon">DO:</InputGroup.Text>
                                        <Form.Control
                                            aria-label="DO"
                                            aria-describedby="DO-addon"
                                            type="text"
                                            value={editableDO}
                                            onChange={(e) => setEditableDO(e.target.value)}
                                        />
                                    </InputGroup>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Text id="NH4N-addon">NH4N:</InputGroup.Text>
                                        <Form.Control
                                            aria-label="NH4N"
                                            aria-describedby="NH4N-addon"
                                            type="text"
                                            value={editableNH4N}
                                            onChange={(e) => setEditableNH4N(e.target.value)}
                                        />
                                    </InputGroup>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Text id="COD-addon">COD:</InputGroup.Text>
                                        <Form.Control
                                            aria-label="COD"
                                            aria-describedby="COD-addon"
                                            type="text"
                                            value={editableCOD}
                                            onChange={(e) => setEditableCOD(e.target.value)}
                                        />
                                    </InputGroup>
                                </ListGroup.Item>
                                {/* ... (other properties) */}
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
                        <Button variant="primary"><Link href={`/tickets`} style={{"color":"#fff","textDecoration":"none"}}>Submit a Ticket</Link></Button>
                        {user && (user.role === 'ADMIN'|| user.role === 'MANAGER') && <Button variant="success" onClick={handleEdit}>Edit</Button>}
                        {user && user.role === 'ADMIN' && <Button variant="danger" onClick={handleDelete}>Delete</Button>}
                    </div>

                </InfoWindow>
            )}
        </>
    );
};

export default MarkerWithInfowindow;