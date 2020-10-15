import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServicesContext, UserContext } from '../../../../App';

const ServiceDetail = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useContext(ServicesContext);
    console.log(services);
    return (
        <section class="card border-white justify-content-center col-md-4 ">
            
            <div >
                <div style={{ margin: 'auto' }}>
                <Link to="/dashboard" onClick={() => setServices(service)} className="text-decoration-none text-secondary">
                    <img style={{ width: '8rem' }} class="card-img-top" src={service.img} alt="Card image cap" />
                </Link>
                </div>

                <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold">{service.title}</h5>
                    <p class="card-text">{service.description}</p>

                </div>
            </div>
           
           

        </section>



    );
};

export default ServiceDetail;