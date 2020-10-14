import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="row d-flex footer-container">
            <div className="col-md-6 ">
                <h3 class="font-weight-bold">Let us handle your<br />project professionally</h3>
                <p className="text-secondary">With well written codes, we build amazing apps for all platforms, mobile and web apps in general</p>
            </div>
            <div className="col-md-6 mb-5 col-sm-12">
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Your Email Address"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name/Companie's Name"/>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message"  class="form-control" rows="8"></textarea>
                    </div>
                    <button className="btn btn-brand text-white">Send</button>
                </form>
            </div>
            <p className="m-auto p-5">copyright Orange labs 2020</p>
        </div>
    );
};

export default Footer;