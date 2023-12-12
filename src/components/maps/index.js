"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchMaps} from "@/lib/maps";
import {
    AdvancedMarker,
    APIProvider,
    InfoWindow,
    Map,
    Marker,
    Pin
} from '@vis.gl/react-google-maps';
import MarkerWithInfowindow from "@/components/maps/marker-with-inwindow";

export default function Maps(){
    const dispatch = useDispatch();
    const sites = useSelector(state => state.maps)

    useEffect(() => {
        dispatch(fetchMaps());
    }, [dispatch]);

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE;

    return (
        <div className="maps" style={{height: '100%', width: '100%'}}>
            <APIProvider apiKey={API_KEY}>
                <Map
                    zoom={5}
                    center={{lng: 104.153576, lat: 30.287459}}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={'bf51a910020fa25a'}
                >
                    {sites.maps && sites.maps.length > 0 && sites.maps.map((site, index) => (
                        <MarkerWithInfowindow
                            key={index}
                            initialPosition={{ lat: site.LatitudeMeasure, lng: site.LongitudeMeasure }}
                            monitorID={site.MonitoringLocationIdentifier}
                            Description={site.MonitoringLocationDescriptionText}
                        />
                    ))}
                </Map>
            </APIProvider>
        </div>
    )
}