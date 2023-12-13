"use client";
// Import necessary libraries and components
import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Breadcrumb, Table } from 'react-bootstrap';
import { useSearchParams } from 'next/navigation';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import {useSelector} from "react-redux";

const DetailsPage = ({ sectionData }) => {
    const [data, setData] = useState(sectionData);
    const searchParams = useSearchParams();
    const [introduction, setIntroduction] = useState("We are asking openai for more information");
    const [loading, setLoading] = useState(false);
    const auth = useSelector(state => state.auth);

    const API_BASE = process.env.NEXT_PUBLIC_BACKEND;

    const fetchDescription = async (description) => {
        const response = await fetch(`${API_BASE}/openai/${description}`);
        const data = await response.json();
        setIntroduction(data.data);
        setLoading(true);
        return data.data;
    };

    useEffect(() => {
        const fetchData = async () => {
            const ProvinceName = searchParams.get('Province');
            const CityName = searchParams.get('City');
            const SectionName = searchParams.get('Section');

            const months = ['202310', '202309', '202308', '202307', '202306'];

            const promises = months.map(async (month) => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/waterpub/Home/GetSectionDataList?sectionName=${SectionName}&cityCode=${CityName}&provinceCode=${ProvinceName}&taskMonth=${month}`);
                const monthData = await response.json();
                return { month, data: monthData };
            });

            const results = await Promise.all(promises);

            setData(results);

            // Fetch description after generating pageId
            await fetchDescription(searchParams.get('Section'));
        };

        fetchData();
    }, []);

    return (
        <div style={{ "padding": "10px" }}>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item>{searchParams.get('Province')}</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {searchParams.get('City')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{searchParams.get('Section')}</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row>
                <Col>
                    <h6>
                        Details of Previous Data <Badge bg="primary">China National Environmental Monitoring Centre</Badge>
                    </h6>
                    <Accordion>
                        {data && data.map((monthData, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{monthData.month}</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover style={{"overflow":"hidden"}}>
                                        <thead>
                                        <tr>
                                            <th width={"10%"}>Key</th>
                                            <th>Value</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.keys(monthData.data[0]).map((header, headerIndex) => (
                                            <tr key={headerIndex}>
                                                <td>{header}</td>
                                                {monthData.data.map((item, itemIndex) => (
                                                    <td key={itemIndex}>{item[header]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
                <Col xs={{ span: 3 }} style={{ "margin": "20px", "padding": "20px" }}>
                    <Row>
                        <h6>
                            Introduction about {searchParams.get('Section')} <Badge bg="primary">OpenAI</Badge>
                        </h6>
                        {loading ? (
                            <Alert style={{ margin: '10px', fontSize: '16px' }} variant={"info"}>
                                <p>{introduction}</p>
                            </Alert>
                        ) : (
                            <Alert style={{ margin: '10px', fontSize: '16px' }} variant={"success"}>
                                <p>{introduction}</p>
                            </Alert>
                        )}
                    </Row>
                </Col>

            </Row>
            {!data && <div>Loading...</div>}
        </div>
    );
};

export default DetailsPage;
