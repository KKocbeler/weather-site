// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCapital.css';
// import Loading from './Pieces/Loading';

const HomeCapital = () => {
    
    // NOTE:
    // Due to the limitations of the OpenWeather API and request quotas for free usage,
    // weather data for the cities is currently being displayed using static values.
    // However, you can fetch live weather data asynchronously from the API
    // using the commented-out code below.
    // This setup can be switched to dynamic data fetching during development
    // or when full API access becomes available.

    // const [capitals] = useState(["London", "Berlin", "Madrid", "Ankara", "Rome", "Paris"]);
    // const [weatherData, setWeatherData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const FetchCapitalsData = async () => {
    //         const promises = capitals.map(async (city) => {
    //             const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    //             const options = {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-RapidAPI-Key': '1440295300msh47d98b37f2c30a9p101cbajsn2a33b4f7be6cdd',
    //                     'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    //                 }
    //             };
    
    //             try {
    //                 const response = await fetch(url, options);
    //                 const result = await response.json();
    //                 console.log(result);
    //                 setLoading(false)
    //             } catch (error) {
    //                 console.error(error);
    //                 setLoading(false);
    //             }
    //         });

    //         const data = await Promise.all(promises);
    //         setWeatherData(data);
    //     };
        
    //     FetchCapitalsData();
    // }, [capitals])

    // console.log(weatherData);

    const cities = [
        { name: 'Madrid', query: 'madrid', temperature: '16 °C', icon: 'fa-sun' },
        { name: 'Berlin', query: 'berlin', temperature: '11 °C', icon: 'fa-cloud-sun' },
        { name: 'London', query: 'london', temperature: '9 °C', icon: 'fa-cloud-showers-heavy' },
        { name: 'Ankara', query: 'ankara', temperature: '7 °C', icon: 'fa-cloud-meatball' },
        { name: 'Paris', query: 'paris', temperature: '14 °C', icon: 'fa-sun' },
        { name: 'Rome', query: 'rome', temperature: '15 °C', icon: 'fa-sun' },
    ];
  return (
    <div className='home-capital container'>
        <div className="home-capital__body">
            <h2>WORLDS WEATHER CONDITIONS</h2>
            <div className="cities">
                {
                    cities.map((city, index) => (
                        <div className="city" key={index}>
                            <Link to={`/weather-details?q=${city.query}`}>
                                <span className='city-name'>{city.name}</span>
                                <div className="temperature">
                                    <i className="fa-solid fa-sun"></i>
                                    <span>{city.temperature}</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>

        {/* {
            loading ? (<Loading />) : (
                <div className="cities">
                {
                    weatherData.map((data, index) => (
                        <div className="city">
                            <span className='city-name'>
                                {data ? data.name : 'yok'}
                            </span>
                            <div className="temperature">
                                <img src={`https://openweathermap.org/img/wn/${data ? data.weather[0].icon : 'yok'}@2x.png`} alt="" />
    
                                <span> 
                                {`${((data ? data.main.temp : 32 - 32) / 1.8).toFixed(0)} °C`}
                                </span>
                            </div>
                        </div>
                    ))
                }
                </div>
            )
        } */}


    </div>
  )
}

export default HomeCapital