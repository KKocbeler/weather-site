import React, { useEffect, useState } from 'react';
import './WeatherCity.css'
import NewsBox from './Pieces/NewsBox';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';
import WeatherCityForecast from './WeatherCityForecast';
import WeatherCityMap from './WeatherCityMap';

const WeatherCity = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [selectedCity, setSelectedCity] = useState(null);
    const [toFahrenheit, setToFahrenheit] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState("");


    const handleTemperatureUnit = () => {
        setToFahrenheit(!toFahrenheit)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/weather-details?q=${keyword}`);
        setKeyword("");
    };

    useEffect(() => {
        const FetchCityData = async () => {
            const url = `https://open-weather13.p.rapidapi.com/city/${query}/EN`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('API request failed')
                }
                const result = await response.json();
                setSelectedCity(result);
                setLoading(false);
            } catch (error) {
                console.log(error.message); 
                setError(error);
                setLoading(false);
            }
        };

        FetchCityData();
    }, [query]);

  return (
    <div className='container'>
        {
            error ? (
                <Error />
            ) :  loading ? (
                <Loading />
            ) : 
            (
                <>
                    <div className="searching-city">
                        { <h1>{ selectedCity ? selectedCity.name : <Loading />}</h1> }
                        <form className="searchhing-city__input" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Search for a new location' onChange={(e) => setKeyword(e.target.value)}/>
                            <i className="fa-solid fa-magnifying-glass"></i> 
                        </form>
                    </div>
                    <div className='weather-city'>
                        <div className="city-logo general-card">
                            <div className="city-timer">
                                <div className="city-timer__date">
                                    February 28 / 02.38pm
                                </div>
                                <div className="blog">
                                    <div className={`ball ${toFahrenheit ? 'fahrenheit' : ''}`} onClick={handleTemperatureUnit}>
                                    {
                                        toFahrenheit ? 
                                            <span className='c-light f-normal'>F</span>
                                        : 
                                            <span className='c-light f-normal'>C</span>
                                    }
                                    </div>
                                </div>
                        </div>
                        <div className="current-heat">
                            <img src={`https://openweathermap.org/img/wn/${selectedCity.weather[0].icon}@2x.png`} alt="" />
                            <div className="temp-container">
                                <div className="temp">
                                    {
                                        toFahrenheit ?
                                            `${selectedCity ? selectedCity.main.temp.toFixed(0) : <Loading />}°`
                                        :
                                            `${selectedCity ? ((selectedCity.main.temp - 32) / 1.8).toFixed(0) : <Loading />}°`
                                    }
                                    <span>
                                        {
                                                toFahrenheit ?
                                                `F`
                                            :
                                                `C`
                                        }
                                    </span>
                                </div>
                                <div className="real-feel back-color f-normal">
                                    RealFeel
                                    <span >
                                        {
                                            toFahrenheit ?
                                                `${ selectedCity ? selectedCity.main.feels_like.toFixed(0) : <Loading />} F°` 
                                            
                                            :
                                                `${selectedCity ? ((selectedCity.main.feels_like - 32) / 1.8).toFixed(0) : <Loading />} C°`
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="city-heat general-card">
                            <div className="city-heat-details">
                                <span className='f-normal'>Weather Forecast</span>
                                { <span className='f-normal'> 
                                    {selectedCity ? ((selectedCity.weather[0].description).charAt(0).toUpperCase() + selectedCity.weather[0].description.slice(1)) : "API Limited"} 
                                </span> }
                            </div>
                            <div className="city-heat-details">
                                <span className='f-normal'>RealFeel</span>
                                <span className='f-normal'>
                                    {
                                        toFahrenheit ?
                                           `${selectedCity ? selectedCity.main.feels_like.toFixed(1) : "API Limited"} °F`
                                        :
                                            `${selectedCity ?((selectedCity.main.feels_like - 32) / 1.8).toFixed(1) : "API Limited"} °C`
                                    } 
                                </span>
                            </div>
                            <div className="city-heat-details">
                                <span className='f-normal'> Wind </span>
                                <span className="f-normal">
                                {
                                    toFahrenheit ? 
                                        `${selectedCity ? selectedCity.wind.speed.toFixed(1) : "API Limited" } mph`
                                    :
                                        `${selectedCity ? (selectedCity.wind.speed / 1.6).toFixed(1) : "API Limited"} km/h`
                                } 
                                </span>
                            </div>
                            <div className="city-heat-details">
                                <span className='f-normal'>Humidity</span>
                                { <span className='f-normal'> { selectedCity ? selectedCity.main.humidity : "API Limited" } %</span> }
                            </div>
                        </div>
                        <div className='weekly-heat general-card'>
                            <WeatherCityForecast  selectedCity={selectedCity} toFahrenheit={toFahrenheit}/>
                        </div>
                        <div className="city-map general-card">
                            <WeatherCityMap selectedCity={selectedCity}/>
                        </div>
                        <div className="weather-side">
                            <NewsBox />
                        </div>
                    </div>
                </>
            )
        }

    </div>
  )
}

export default WeatherCity