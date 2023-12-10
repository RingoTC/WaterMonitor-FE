"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Row, Col, Dropdown, Table } from 'react-bootstrap';
import './details.css';
const API_BASE = process.env.REACT_APP_BACKEND || 'http://localhost:9000';

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

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [cityDisabled, setCityDisabled] = useState(true);
    const [selectedSection, setSelectedSection] = useState(sectionData[0]);
    const [selectedSectionData, setSelectedSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProvinces();
                dispatch(setProvinces(response.data));
            } catch (error) {
                console.error('Error fetching provinces:', error);
            }
        };

        fetchData();
    }, [dispatch]);

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
        <div>
            <Row>
                <Col>
                    <Dropdown>
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
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-city" disabled={cityDisabled}>
                            {selectedProvince?.name && cities.length ? selectedCity?.name || 'Select City' : 'Select City'}
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
                </Col>
            </Row>
        </div>
    );
}
