import React, { useContext, useEffect } from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import './Service.css'
import { UserContext } from '../../../App';
import Order from '../../Dashboard/Order/Order';
import { useState } from 'react';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
const servicesData = [
    {
        title: 'Web and Mobile Design',
        img: 'https://i.imgur.com/o4ot365.png',
        description: 'We craft stunning and amazing UI, using a well drafted UX to fit your project'
    },
    {
        title: 'Graphic Design',
        img: 'https://i.imgur.com/3Pln1Zr.png',
        description: 'Amazing flyers social media posts and brand representations that would make your brand stand out'
    },
    {
        title: 'Web Development',
        img: 'https://i.imgur.com/siwPYeg.png',
        description: 'With well written codes, we build amazing app for all platforms, mobile and web apps in general'
    }
]
const Service = () => {
    

 
    return (
        <div  className="service">
           <div className="text-center my-5">
              <h1>Provide Awesome <span style={{color:'#7AB259'}}>Service</span></h1>
           </div>
           <div className="d-flex w-100 m-auto row">
             {
                servicesData.length == 0 && <LoadingSpinner/>
             }
              {
                servicesData.map(service => <ServiceDetail service={service} key={service.title}></ServiceDetail>)
                
            }
           </div>
            
        </div>


    );
};

export default Service;