import React, { useEffect, useState } from 'react'
import Loading from './Pieces/Loading';
import './WeatherCityForecast.css';

const WeatherCityForecast = ({selectedCity, toFahrenheit}) => {
    
    const [days] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const ForecastFetchData = async () => {
            if (selectedCity && selectedCity.coord) {
                    setLoading(true);
                    const url = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${selectedCity.coord.lon}/${selectedCity.coord.lat}`;
                    const options = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                        }
                    };
                
                try {
                    const response = await fetch(url, options);
                    const result = await response.json();                
                    setForecast(result.list);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        ForecastFetchData();
    }, [selectedCity]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <p>5-day weather forecast</p>
                    <div className="weekly-cards">
                        {forecast &&
                        forecast
                            .filter((cast, index) => index % 8 === 0)
                            .map((cast) => (
                            <div className="weekly-card" key={cast.dt}>
                                <span>
                                    {
                                        new Date(cast.dt_txt).getDay() === new Date().getDay() ? "Today" : days[new Date(cast.dt_txt).getDay()]
                                    }
                                </span>
                                <img src={`https://openweathermap.org/img/wn/${cast.weather[0].icon}@2x.png`} alt={cast.weather[0].description}/>
                                <span>
                                    {
                                        toFahrenheit ? (
                                            `${(((cast.main.temp - 273.15) * 1.8) + 32).toFixed(0)}℉`
                                        ) : (
                                            `${(cast.main.temp - 273.15).toFixed(0)}℃`
                                        )
                                    }
                                </span>
                            </div>
                            ))}
                    </div>
                </>
            )}
        </>
      );
    };
    
    export default WeatherCityForecast;