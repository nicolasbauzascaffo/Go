import React from 'react';
import logo from '../images/logo.png'
import pop from '../images/popcorn.png'
import '../styles/premiere.css'

const Premiere = () => {
    return (
        <div className='premiere' >
            <section className="logo-page" >
              <img src={logo} />
              <h4>Go</h4>
            </section>
            <img src={pop} />
            <h2>Welcome to Go, the best movie platform</h2>
            <p>Enjoy our Premium Movies section now for free</p>
        </div>
    );
}

export default Premiere;
