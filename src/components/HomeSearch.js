import React, { useState } from 'react';
import './HomeSearch.css'
import { useNavigate } from 'react-router-dom';

const HomeSearch = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/weather-details?q=${keyword}`);

        setKeyword("")
    }

    console.log(keyword)

    return (
    <div className="search container">
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Search Locations' onChange={(e) => setKeyword(e.target.value)}/>
            <i className="fa-solid fa-location-crosshairs" onClick={handleSubmit}></i>
        </form>
    </div>
    )
}

export default HomeSearch