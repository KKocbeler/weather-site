import React, { useEffect, useState } from 'react';
import "./NewsBox.css"
import { Link } from 'react-router-dom';
import data from '../../data/news.json'

const NewsBox = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(data.news);
    }, []);

    const CalculateTime = (releaseTime) => {
        const now = new Date();
        const releaseDate = new Date(releaseTime.year, releaseTime.month - 1, releaseTime.days, releaseTime.hours, releaseTime.minutes);
        const difference = now - releaseDate;
        const remainingSeconds = Math.round(difference / 1000);
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
        return { days, hours, minutes };
    }
    return (

            <div className="side-news">
                {news && news.map(haber => {
                    const { days, hours, minutes } = CalculateTime(haber['release-time']);
                    return (
                            <div className="side-news__news" key={haber.id}>
                                <Link key={haber.id}>
                                    <div className="news-image">
                                        <img src={haber.image} alt={haber.title} />
                                    </div>
                                    <div className="news-article">
                                        <h5 className='news-title'>{haber.title}</h5>
                                        <span className='news-time'>
                                            {days > 0 ? `${days} days ago` : hours > 0 ? `${hours} hours ago` : `${minutes} minutes ago`}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                    );
                })}
            </div>
       
    );
}

export default NewsBox;
