import React from 'react';

import Client from '../Client/Client';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header/>
            <Client/>
            <Service/>
           <Slider/>
           <Feedback/>
           <Footer/>
        </div>
    );
};

export default Home;