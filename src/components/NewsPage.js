import React, { useState } from 'react';
import './NewsPage.css';
import { Link } from 'react-router-dom';

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const newNews = [
        {
            image: 'images/news-page/news-four.png',
            genre: 'Technology',
            title: 'New breakthrough in renewable energy could revolutionize the industry',
            body: 'Scientists have discovered a groundbreaking method for capturing and storing solar energy that could drastically change the landscape of renewable energy production.'
        },
        {
            image: 'images/news-page/news-five.webp',
            genre: 'Science',
            title: 'Researchers find evidence of ancient life on Mars in meteorite',
            body: 'A team of scientists has uncovered what they believe to be fossilized microbial life forms within a meteorite originating from Mars, providing strong evidence for the existence of past life on the Red Planet.'
        },
        {
            image: 'images/news-page/news-six.jpg',
            genre: 'Technology',
            title: 'AI-powered robot performs surgery successfully for the first time',
            body: 'In a groundbreaking achievement, a robotic surgical system powered by artificial intelligence has completed a complex surgery autonomously, marking a major milestone in the field of medical technology.'
        },
        {
            image: 'images/news-page/news-seven.jpeg',
            genre: 'Science',
            title: 'Newly discovered exoplanet may harbor conditions suitable for life',
            body: 'Astronomers have identified a new exoplanet located within the habitable zone of its star, raising the possibility that it could host liquid water and potentially support life as we know it.'
        }
    ];

    const loadMoreNews = () => {
        const startIndex = news.length;
        const endIndex = Math.min(startIndex + 2, newNews.length);
        const newNewsToAdd = newNews.slice(startIndex, endIndex);

        setNews(prevNews => [...prevNews, ...newNewsToAdd])

        if (endIndex === newNews.length) {
            setShowLoadMore(false);
        }
    }

    const loadLessNews = () => {
        const currentLength = news.length;
        const newLenght = Math.max(currentLength - 2, 0);
        const updatedNews = news.slice(0, newLenght);
        setNews(updatedNews);
        setShowLoadMore(newLenght === 0);
    }

  return (
    <div className='news-page container'>
        <div className="news-page__main">
            <div className="big-news">
                <h2>California towns buried under more than 10 feet of snow</h2>
                <div className="headline">
                    <h3>California’s mountain towns and ski resorts are digging out after a blockbuster blizzard buried them and major roads under several feet of snow.</h3>
                    <img src="images/news-page/main-news.webp" alt="" />
                </div>
            </div>
            <div className="general-news">
                <div className="news-card">
                        <div className="card-image">
                            <Link>
                                <img src="images/news-page/news-one.webp" alt="" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="news-genre">
                                Weather
                            </div>
                            <Link>
                                <h5 className='news-title'>The week that life in Dubai ground to a halt</h5>
                            </Link>
                            <p className='news-body'>The scenes from Dubai this week seemed apocalyptic to residents who are more used to the tranquil nature of the sunny metropolis in the desert.</p>
                        </div>
                </div>
                <div className="news-card">
                        <div className="card-image">
                            <Link>
                                <img src="images/news-page/news-two.webp" alt="" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="news-genre">
                                Weather
                            </div>
                            <Link>
                                <h5 className='news-title'>Severe storms could bring large hail and some tornadoes across a huge swath of the Central US</h5>
                            </Link>
                            <p className='news-body'>A pair of storm systems threatens more than 40 million people across parts of the Central and Eastern US on Monday, both capable of producing large hail, damaging winds and a handful of tornadoes.</p>
                        </div>
                </div>
                <div className="news-card">
                        <div className="card-image">
                            <Link>
                                <img src="images/news-page/news-three.webp" alt="" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="news-genre">
                                Weather
                            </div>
                            <Link>
                                <h5 className='news-title'>A California superbloom is springing to life and the best is yet to come</h5>
                            </Link>
                            <p className='news-body'>California will soon be decorated with a rainbow of wildflowers after drenching winter rain set the stage for a spectacular spring superbloom.</p>
                        </div>
                </div>
                {
                    news && news.map((item, index) => (
                        <div className="news-card" key={index}>
                            <div className="card-image">
                                <Link>
                                    <img src={item.image} alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className={`news-genre ${item.genre.toLowerCase()}-news`}>
                                    {item.genre}
                                </div>
                                <Link>
                                    <h5 className="news-title">{item.title}</h5>
                                </Link>
                                <p className='news-body'>{item.body}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                showLoadMore ? (
                    <div className="load-more" onClick={loadMoreNews}>
                        Load More <i className="fa-solid fa-chevron-down"></i>
                    </div>
                ) : (

                    <div className="load-more" onClick={loadLessNews}>
                        Load Less <i className="fa-solid fa-chevron-up"></i>
                    </div>
                )
            }

        </div>
        <div className="news-page__side">
            <h4>Latest News</h4>
            <ul className="latest-news-list">
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
                <li className="latest-news-item">
                    <span>5m ago</span>
                    <p>California man is first in the U.S to be charged with smuggling greengouse gases, prosecutors say</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NewsPage