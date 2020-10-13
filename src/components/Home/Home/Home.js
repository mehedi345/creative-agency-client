import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';




const Home = () => {
    return (
        <div>
            <Header/>
            <Client/>
            <Service/>
           <Slider/>
        </div>
    );
};

export default Home;