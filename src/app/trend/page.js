"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {Row, Col, Dropdown, Table, Container} from 'react-bootstrap';
import './details.css';
const API_BASE = process.env.REACT_APP_BACKEND || 'http://localhost:9000';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Spinner from "react-bootstrap/Spinner";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alert from "react-bootstrap/Alert";

const getProvinces = async () => {
    const request = `${API_BASE}/waterpub/Home/GetProvinceList`;
    return await axios.get(request);
};

const getCitiesByProvinceCode = async (provinceCode) => {
    const request = `${API_BASE}/waterpub/Home/GetCityList?provinceCode=${provinceCode}`;
    return await axios.get(request);
};

const getSectionDataList = async (provinceName, cityName, taskMonth) => {
    const request = `${API_BASE}/waterpub/Home/GetSectionDataList?sectionName=&provinceCode=${provinceName}&cityCode=${cityName}&taskMonth=${taskMonth}`;
    return await axios.get(request);
};

const setProvinces = (provinces) => ({
    type: 'SET_PROVINCES',
    payload: provinces,
});

const setCities = (cities) => ({
    type: 'SET_CITIES',
    payload: cities,
});

const setSectionData = (sectionData) => ({
    type: 'SET_SECTION_DATA',
    payload: sectionData,
});

export default function Details() {
    const dispatch = useDispatch();

    const provinces = useSelector((state) => state.data.province.list);
    const cities = useSelector((state) => state.data.city.list);
    const sectionData = useSelector((state) => state.data.sectionData.list);

    const [selectedProvince, setSelectedProvince] = useState('北京市');
    const [selectedCity, setSelectedCity] = useState('北京市');
    const [cityDisabled, setCityDisabled] = useState(true);
    const [selectedSection, setSelectedSection] = useState(sectionData[0]);
    const [selectedSectionData, setSelectedSectionData] = useState(null);

    const router = useRouter();
    const searchParams = useSearchParams();

    const user = useSelector(state => state.auth.user);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProvinces();
                dispatch(setProvinces(response.data));

                if (searchParams.get('Province') && searchParams.get('City')) {
                    await handleQuery();
                }

            } catch (error) {
                console.error('Error fetching provinces:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleQuery = async () => {
        const ProvinceName = searchParams.get('Province');
        const CityName = searchParams.get('City');

        try{
            const response = await getSectionDataList(ProvinceName, CityName, '202310');
            dispatch(setSectionData(response.data));

            // Set the first section as the default selected section data
            if (response.data.length > 0) {
                handleProvinceChange(ProvinceName, '000').then(() => {
                    handleCityChange('000', '000', ProvinceName, CityName);
                })
            }
        }catch (error) {
            console.error('Error fetching section data:', error);
        }

    }


    const handleProvinceChange = async (name, code) => {
        setSelectedProvince({ name, code });
        setCityDisabled(true);

        try {
            const response = await getCitiesByProvinceCode(code);
            dispatch(setCities(response.data));

            // Set the first city as the default selected city
            if (response.data.length > 0) {
                setSelectedCity({
                    code: response.data[0]['CityCode'],
                    name: response.data[0]['CityCH'],
                });
            }

            setCityDisabled(false);

        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleCityChange = async (provinceCode, cityCode, provinceName, cityName) => {
        setSelectedCity({ code: cityCode, name: cityName });

        try {
            const sectionDataResponse = await getSectionDataList(provinceName, cityName, '202310');
            dispatch(setSectionData(sectionDataResponse.data));

            // Set the first section as the default selected section data
            if (sectionDataResponse.data.length > 0) {
                setSelectedSectionData(sectionDataResponse.data[0]);

            }
        } catch (error) {
            console.error('Error fetching section data:', error);
        }
    };

    const handleSectionClick = (section) => {
        setSelectedSectionData(section);
        setSelectedSection(section);
    };

    return (
        <div style={{"padding":"20px"}}>
            <Alert>
                <Alert.Heading>Section Data</Alert.Heading>
                <p>
                    This page is used to display the section data of the water quality monitoring section. The data is updated every day and from CNEMC(China National Environmental Monitoring Centre, http://waterpub.cnemc.cn:10001/).
                </p>
                <p>
                    CNEMC (hereinafter referred to as "Terminal") is a public institution directly under the Ministry of Ecology and Environment, approved by the state at the end of 1979, and formally organized in 1980. Its main functions are to undertake national ecological environment monitoring tasks, lead the development of ecological environment monitoring technology, and provide monitoring information and technical support for the national ecological environment management and decision-making, Its main functions are to undertake national ecological environment monitoring tasks, lead the development of ecological environment monitoring technology, provide monitoring information, reports and technical support for national ecological environment management and decision-making, and provide technical guidance for national ecological environment monitoring.
                </p>
            </Alert>
            {user && (
                <div>
                    <Row>
                        <Col style={{ float: 'left', marginRight: '10px' }}>
                            <Dropdown className={"float"}>
                                <Dropdown.Toggle variant="success" id="dropdown-province">
                                    {selectedProvince?.name ?? 'Select Province'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {provinces.map((province) => (
                                        <Dropdown.Item key={province['ProvinceCode']} onClick={() => handleProvinceChange(province['ProvinceCH'], province['ProvinceCode'])}>
                                            {province['ProvinceCH']}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col style={{ float: 'left' }}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-city" disabled={cityDisabled}>
                                    {selectedProvince?.name ? selectedCity?.name || 'Select City' : 'Select City'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {cities.map((city) => (
                                        <Dropdown.Item key={city['CityCode']} onClick={() => handleCityChange(selectedProvince?.code, city['CityCode'], selectedProvince?.name, city['CityCH'])}>
                                            {city['CityCH']}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    {/* Render Section Data */}
                    <Row>
                        <Col xs={4}>
                            <h3>Section Data</h3>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>Section Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sectionData.map((section) => (
                                    <tr key={section.SectionCode} onClick={() => handleSectionClick(section)} className={`section-item ${selectedSection === section ? 'selected-section' : ''}`}>
                                        <td>{section.SectionName}</td>
                                        <td width={"10%"}>
                                            <Link href={`/details/?Province=${selectedProvince?.name}&&City=${selectedCity?.name}&&Section=${section.SectionName}`}>
                                                <svg t="1702145765038" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1481" width="30" height="30"><path d="M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4" fill="#1296db" p-id="1482"></path></svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <h3>Selected Section Data</h3>
                            {selectedSectionData && (
                                <Table striped bordered hover responsive>
                                    <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Object.entries(selectedSectionData).map(([key, value]) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{value}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            )}
                            {
                                !selectedSectionData && (
                                    <Spinner animation="grow" />
                                )
                            }
                        </Col>
                    </Row>
                </div>
            )}
            {!user && (
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Alert variant="danger" className="text-center">
                        <Alert.Heading>Access Denied</Alert.Heading>
                        <p>You must be logged in to access this page.</p>
                        Link to <Link href="/reduxlogin">Login</Link>
                    </Alert>
                </Container>
            )}
        </div>
    );
}
