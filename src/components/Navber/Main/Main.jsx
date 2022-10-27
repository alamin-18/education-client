import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Menuber from '../../Menuber/Menuber';

const Main = () => {
    return (
        <div>
            {/* <Menuber></Menuber> */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;