// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCapital.css';
// import Loading from './Pieces/Loading';

const HomeCapital = () => {
    
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
  return (
    <div className='home-capital container'>
        <div className="home-capital__body">
        <h4>WORLDS WEATHER CONDITIONS</h4>

        <div className="cities">
            <div className="city">
                <Link to={'/weather-details?q=madrid'}>
                    <span className='city-name'>Madrid</span>
                    <div className="temperature">
                        <i className="fa-solid fa-sun"></i>
                        <span>16 °C</span>
                    </div>
                </Link>
            </div>
            <div className="city">
                <Link to={'/weather-details?q=berlin'}>
                    <span className='city-name'>Berlin</span>
                    <div className="temperature">
                        <i className="fa-solid fa-cloud-sun"></i>
                        <span>11 °C</span>
                    </div>
                </Link>
            </div>
            <div className="city">
                <Link to={'/weather-details?q=london'}>
                    <span className='city-name'>London</span>
                    <div className="temperature">
                        <i className="fa-solid fa-cloud-showers-heavy"></i>
                        <span>9 °C</span>
                    </div>
                </Link>
            </div>
            <div className="city">
                <Link to={'/weather-details?q=ankara'}>
                    <span className='city-name'>Ankara</span>
                    <div className="temperature">
                        <i className="fa-solid fa-cloud-meatball"></i>
                        <span>7 °C</span>
                    </div>
                </Link>
            </div>
            <div className="city">
                <Link to={'/weather-details?q=paris'}>
                    <span className='city-name'>Paris</span>
                    <div className="temperature">
                        <i className="fa-solid fa-sun"></i>
                        <span>14 °C</span>
                    </div>
                </Link>
            </div>
            <div className="city">
                <Link to={'/weather-details?q=rome'}>
                    <span className='city-name'>Rome</span>
                    <div className="temperature">
                        <i className="fa-solid fa-sun"></i>
                        <span>15 °C</span>
                    </div>
                </Link>
            </div>

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