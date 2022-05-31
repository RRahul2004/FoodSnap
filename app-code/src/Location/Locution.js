import React, { useCallback } from "react";
import { useRef, useMemo, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import './location.css';

const map_container = { 
    width: "50vw", 
    height: "87vh"
};




const options ={
        disableDefaultUI: true,
        clickableIcons: false,
};

function Locution() {
    const center = useMemo(()=> ({ lat: 43.595310, lng: -79.640579}), []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBBQOhA59C1dGhx4JI1La2nr4eIjMV4SFc",
        libraries: ["places"]
    });
    
    const [markers, setMarkers] = React.useState([]);

    if (!isLoaded) {
        return console.log("Loading...");
    }

    if (loadError) return "Loading Error";

    return (
        <div className="main-map">    
            <GoogleMap zoom={ 10 } center={ center } mapContainerStyle={ map_container } options={options} onClick={(event)=>{
                setMarkers(current => [...current, {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                }]);
            }} />

            <div>
            </div>
        </div>
    );
}

export default Locution;