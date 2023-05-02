import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Banner/Header';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';



const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;