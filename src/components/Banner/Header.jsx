import React from 'react';
import './Header.css'
const Header = () => {
    return (
      <header className='header'>
      <div className="banner-content">
        <h1>Welcome to Chef's Recipes</h1>
        <p>Discover delicious recipes from a professional chef</p>
        <button className='btn'>View more</button>
      </div>
    </header>
    );
};

export default Header;