import React from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'Web and Mobile Design',
        img: 'https://i.imgur.com/o4ot365.png',
        description: 'We craft stunning and amazing UI, using a well drafted UX to fit your project'
    },
    {
        name: 'Graphic Design',
        img: 'https://i.imgur.com/3Pln1Zr.png',
        description: 'Amazing flyers social media posts and brand representations that would make your brand stand out'
    },
    {
        name: 'Web Development',
        img: 'https://i.imgur.com/siwPYeg.png',
        description: 'With well written codes, we build amazing app for all platforms, mobile and web apps in general'
    }
]
const Service = () => {
    return (
        <div >
           <div className="text-center my-5">
              <h1>Provide Awesome <span style={{color:'#7AB259'}}>Service</span></h1>
           </div>
           <div className="d-flex w-100  m-auto">
             {
                servicesData.map(service => <ServiceDetail service={service} key={Service.name}></ServiceDetail>)
            }
           </div>
            
        </div>


    );
};

export default Service;