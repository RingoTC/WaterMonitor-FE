import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Dropdown} from "react-bootstrap";
const API_BASE = process.env.REACT_APP_BACKEND || "http://localhost:9000";
const setProvinces = (provinces) => ({
    type: 'SET_PROVINCES',
    payload: provinces,
});

const setCities = (cities) => ({
    type: 'SET_CITIES',
    payload: cities,
});

const getProvinces = async () => {
    //http://localhost:9000/waterpub/Home/GetProvinceList
    const request = `${API_BASE}/waterpub/Home/GetProvinceList`
    return await axios.get(request);
}

const getCitiesByProvinceCode = async (provinceCode) => {
    //http://waterpub.cnemc.cn:10001/Home/GetCityList?provinceCode=140000
    const request = `${API_BASE}/waterpub/Home/GetCityList?provinceCode=${provinceCode}`
    return await axios.get(request);
}

export default function Details(){
    const dispatch = useDispatch();

    const provinces = useSelector((state) => state.data.province.list);
    const cities = useSelector((state) => state.data.city.list);

    const [selectedProvince, setSelectedProvince] = useState('');
    const [cityDisabled, setCityDisabled] = useState(true);

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

    const handleProvinceChange = async (selected) => {
        setSelectedProvince(selected);
        setCityDisabled(true);

        try {
            const response = await getCitiesByProvinceCode(selected);
            dispatch(setCities(response.data));
            setCityDisabled(false);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    return (
        <div>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-province">
                            {selectedProvince || 'Select Province'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {provinces.map((province) => (
                                <Dropdown.Item key={province.code} onClick={() => handleProvinceChange(province.code)}>
                                    {province.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-city" disabled={cityDisabled}>
                            {cities.length ? 'Select City' : 'Please select a province first'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cities.map((city) => (
                                <Dropdown.Item key={city.code}>{city.name}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    )
}

