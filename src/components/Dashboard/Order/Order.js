import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div>
            <form className="form-container mt-5 mr-5">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Name/Companie's Name" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your Email Address"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Graphics Design" />
                </div>
                <div class="form-group">
                    <textarea placeholder="Project Details" class="form-control" rows="3"></textarea>
                </div>
                <div className="d-flex">
                    <div className="col-md-6">
                        <input type="text" placeholder="price"/>
                    </div>
                    <div className="col-md-6">
                        <input type="file"/>
                    </div>
                </div>
                <button className="btn btn-brand text-white mt-3">Send</button>
            </form>
           
        </div>
    );
};

export default Order;