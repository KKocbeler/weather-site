import React from 'react';
import './HomeMain.css';
import NewsBox from './Pieces/NewsBox';
import WeatherCityMap from './WeatherCityMap';

const HomeMain = () => {
  return (
    <>
        <div className="home-main container">
            <div className="main-left">
                <h4>WORLDS WEATHER RADAR</h4>
                <div className="main-left-map">
                    <WeatherCityMap />
                </div>
                <div className="main-left-article">
                    <p className='f-normal'> 
                        The global weather radar is an essential tool used to monitor and forecast atmospheric conditions worldwide.
                        Radar systems typically use high-frequency radio waves to receive signals reflected from objects in the surrounding area and utilize this
                        information to determine weather conditions. These radars can detect various types of precipitation such as rain, snow, and hail,
                        and are even used to monitor the formation of weather phenomena. Additionally, they are used to track storm cells and the movement of air masses.
                        The worldwide network of weather radar plays a critical role in providing meteorologists and the public with weather forecasts and warnings.
                    </p>
                    <p className='f-normal'>
                        Weather radar systems are equipped with advanced technology that allows them to provide real-time data on atmospheric conditions, enabling meteorologists to make accurate
                        forecasts and issue timely warnings for severe weather events. By continuously scanning the atmosphere, these radar systems can detect the development and movement of storms,
                        helping to predict their intensity and trajectory. They also play a crucial role in aviation safety by identifying hazardous weather conditions along flight paths. Furthermore,
                        weather radar data is invaluable for various sectors, including agriculture, transportation, and emergency management, as it facilitates informed decision-making and risk
                        mitigation strategies in response to changing weather patterns.
                    </p>
                </div>
            </div>
            <div className="main-right">
                <h4>News</h4>
                <NewsBox />
            </div>
        </div>
    </>
  )
}

export default HomeMain