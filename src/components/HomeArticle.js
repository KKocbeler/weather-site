import React from 'react';
import './HomeArticle.css'

const HomeArticle = () => {
  return (
    <div className='home-article container'>
        <h4>Space and Astronomy</h4>
        <div className="article-cards">
            <div className="article-card">
                <div className="article-card-image">
                    <img src="Images/home-article/article-1.webp" alt="" />
                </div>
                <div className="article-card-body">
                    <div className="article-text">
                        <p className='owerflow-text'>Mars could be driving ‘giant whirlpools’ in the Earth’s deep oceans</p>
                    </div>
                    <div className="article-time">
                        <span>10 minutes ago</span>
                    </div>
                </div>
            </div>
            <div className="article-card">
                <div className="article-card-image">
                    <img src="Images/home-article/article-2.webp" alt="" />
                </div>
                <div className="article-card-body">
                    <div className="article-text">
                        <p className='owerflow-text'>Oldest ‘dead’ galaxy spied by Webb may cause astronomers to revise their understanding of the early universe</p>
                    </div>
                    <div className="article-time">
                        <span>4 hours ago</span>
                    </div>
                </div>
            </div>
            <div className="article-card">
                <div className="article-card-image">
                    <img src="Images/home-article/article-3.webp" alt="" />
                </div>
                <div className="article-card-body">
                    <div className="article-text">
                        <p className='owerflow-text'>Nearly 30,000 objects are hurtling through near-Earth orbit. That’s not just a problem for space</p>
                    </div>
                    <div className="article-time">
                        <span>2 days ago</span>
                    </div>
                </div>
            </div>
            <div className="article-card">
                <div className="article-card-image">
                    <img src="Images/home-article/article-4.webp" alt="" />
                </div>
                <div className="article-card-body">
                    <div className="article-text">
                        <p className='owerflow-text'>How to see the International Space Station from your backyard</p>
                    </div>
                    <div className="article-time">
                        <span>7 days ago</span>
                    </div>
                </div>
            </div>
            <div className="article-card">
                <div className="article-card-image">
                    <img src="Images/home-article/article-5.webp" alt="" />
                </div>
                <div className="article-card-body">
                    <div className="article-text">
                        <p className='owerflow-text'>A 5,000-pound satellite is expected to fall to Earth this week</p>
                    </div>
                    <div className="article-time">
                        <span>11 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeArticle