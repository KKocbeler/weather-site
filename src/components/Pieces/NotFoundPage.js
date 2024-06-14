import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not-found container'>

        <h1>404</h1>
        <h3>Page not found</h3>
        <p>This page you are looking for dosen't exist or an other error occured. <br />Go back or head over to <Link to={"/"}>Home</Link> choose a new direction</p>
    </div>
  )
}

export default NotFoundPage