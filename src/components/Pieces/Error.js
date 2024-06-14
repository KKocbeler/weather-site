import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
        <h2> Sorry, this page isn't available.</h2>
        <p>The link you searched may be broken, or the page may have been removed. <Link to={'/'}>Go back to Home.</Link></p>
        <img src="images/error/error-image.png" alt="error" />
    </div>
  )
}

export default Error