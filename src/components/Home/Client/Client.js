import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Client.css'

const Client = () => {
    return (
        <div className="d-flex justify-content-center align-items-center client-container">
            <div className="col-md-2"><img className="client-img" src= {slack} alt="slack"/></div>
            <div className="col-md-2"><img className="client-img" src= {google} alt="google"/></div>
            <div className="col-md-2"><img className="client-img" src= {uber} alt="uber" /></div>
            <div className="col-md-2"><img className="client-img" src={netflix} alt="netflix"/></div>
            <div className="col-md-2"><img className="client-img" src= {airbnb} alt="airbnb"/></div>
        </div>

    );
};

export default Client;