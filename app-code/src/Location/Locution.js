import React, { useState } from "react";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";

import './location.css';

function Locution() {
    // State hooks for users coordinates
    const [cords, setCords] = useState();

    // Loading google scripts for the map API
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        //googleMapsApiKey: "AIzaSyBOjXjnkULjxJ6dWnN-3I5FhS5RNdB_eBY",
    });

    // If we fail to load the google scripts return "loading"
    if (!isLoaded) return <div>Loading...</div>

    const center = {
        lat: 43.5890,
        lng: -79.6441
    };

    const styles = {
        width: "100vw",
        height: "88vh",
    };

    // Hard-coded coordinates for the foodbanks
    const seva = { lat: 43.55989, lng: -79.647631};
    const miss = { lat: 43.623902, lng: -79.575136};
    const musl = { lat: 43.575342, lng: -79.646433};

    // getting user  using built in Navigation API
    if (!cords) {
        navigator.geolocation.getCurrentPosition(
            async function (position) {
                setCords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.log(error)
            }
        );
    }

    return (
        <div>
            <div className="banks">
                <a target = ".blank" href = {"https://www.sevafoodbank.com/"} className="bank-1">
                    <h2>Seva Food Bank</h2>
                    <h3>3413 Wolfedale Rd Unit #10</h3>
                    <h4>(905) 361-7382 ext. 1</h4>
                    <h5 className={"seva-marker"}>Green Marker</h5>
                </a>
                <a target = ".blank" href = {"https://www.themississaugafoodbank.org/"} className="bank-2">
                    <h2>Mississauga Food Bank</h2>
                    <h3>3121 Universal Dr</h3>
                    <h4>(905) 270-5589</h4>
                    <h5 className={"mfb-marker"}>Red Marker</h5>
                </a>
                <a target = ".blank" href ={"https://www.muslimwelfarecentre.com/"} className="bank-3">
                    <h2>Muslim Welfare Center</h2>
                    <h3>3490 Mavis Rd</h3>
                    <h4>(905) 281-9730</h4>
                    <h5 className={"mwc-marker"}>Blue Marker</h5>
                </a>
            </div>
            <div className="main-map">
                <GoogleMap zoom={11} mapContainerStyle = {styles} center = {center}>
                    <Marker position={ seva } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} } />
                    
                    <Marker position={ miss } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} } />
                    
                    <Marker position={ musl } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} } />

                    <Marker position={ cords } icon = { { url: "http://maps.google.com/mapfiles/kml/pal2/icon2.png" } }/>

                </GoogleMap>
            </div>
        </div>
    );
}

export default Locution;