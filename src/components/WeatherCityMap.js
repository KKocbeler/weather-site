import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Loading from './Pieces/Loading';


const WeatherCityMap = ({selectedCity}) => {
    const mapStyles = {
        height: "100%",
        width: "100%"
    };

    if(!selectedCity) {
        return <Loading />;
    }

    const defaultCenter = {
        lat: selectedCity.coord.lat,
        lng: selectedCity.coord.lon 
    };

    return (
        <LoadScript 
            googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={8}
                center={defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default WeatherCityMap;