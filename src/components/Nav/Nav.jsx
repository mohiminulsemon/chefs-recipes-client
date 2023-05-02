import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <nav className='Nav'>
            <h2>Chef's Recipes</h2>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {/* {user && <span className='text-white'>Welcome {user.email} <button className='btn-out' onClick={handleLogout}>SignOut</button></span> } */}
            </div>
        </nav>
    );
};

export default Nav;