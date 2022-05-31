import React, { useState, useEffect } from "react";
const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "",},
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude, 
                lng: location.coords.logitude,
            },
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
            },)
    }
    
    useEffect(() => {
        onError();        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [])

    return location
}

export default useGeolocation;