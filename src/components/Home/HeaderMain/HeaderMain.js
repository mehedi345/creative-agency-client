import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
            <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: ' #111430',fontWeight: 'bold'}}>Let's Grow Your<br/> Brand To The <br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aut temporibus laboriosam error cupiditate excepturi.</p>
                <button className="btn-brand text-white">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
        
    );
};

export default HeaderMain;