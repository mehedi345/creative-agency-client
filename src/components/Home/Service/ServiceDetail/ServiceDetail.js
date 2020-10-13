import React from 'react';

const ServiceDetail = ({ service }) => {
    return (

        <div class="card border-white justify-content-center col-md-4"> 
             
            <div style={{margin: 'auto'}}>
                <img style={{width: '8rem'}} class="card-img-top" src={service.img} alt="Card image cap"/>
                </div>

                <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold">{service.name}</h5>
                    <p class="card-text">{service.description}</p>

                </div>
            </div>
        
       
    );
};

export default ServiceDetail;