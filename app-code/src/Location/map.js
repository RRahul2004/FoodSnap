import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Map({ markerHandle, coord, marker }) {
    const { isLoaded } = useJsApiLoader({ 
        id: "google-map-script", 
        googleMapsApiKey: "AIzaSyBBQOhA59C1dGhx4JI1La2nr4eIjMV4SFc",
    });

    const style = {
        width: "100%",
        height: "100%"
    };

    return isLoaded ? (
        <GoogleMap 
            onClick={markerHandle} 
            zoom = {8} 
            center = {coord} 
            mapContainerStyle={style}>
            <Marker position={marker}></Marker>
        </GoogleMap>
    ):(
        <div></div>
    );
}

export default Map;