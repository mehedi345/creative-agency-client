import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServicesContext } from '../../../../App';

const ServiceDetail = ({ service }) => {
    const [services, setServices] = useContext(ServicesContext)
    return (
        <section class="card border-white justify-content-center col-md-4 ">
            <Link to="/dashboard" className="text-decoration-none text-secondary">
            <div onClick={() => setServices(services)}>
                <div style={{ margin: 'auto' }}>
                    <img style={{ width: '8rem' }} class="card-img-top" src={service.img} alt="Card image cap" />
                </div>

                <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold">{service.title}</h5>
                    <p class="card-text">{service.description}</p>

                </div>
            </div>
            </Link>
           

        </section>



    );
};

export default ServiceDetail;