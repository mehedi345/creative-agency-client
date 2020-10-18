import React from 'react';

const FeedbackDetail = ({review}) => {
   
    return (
        <div class="card justify-content-center col-md-4 border-white mb-5 col-12">  
            <div className="d-flex row" style={{margin: 'auto'}}>
               <div className="col-md-6">
                 <img style={{width: '6rem'}} class="card-img-top" src={review.img} alt="Card image cap"/>
               </div>
               <div className="col-md-6">
                   <p className="font-weight-bold">{review.name}</p>
                   <small className="font-weight-bold">CEO,Manpol</small>
               </div>
            </div>
            <div class="card-body">
               
                <p class="card-text text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quod omnis iusto facilis velit placeat provident amet modi. Maiores, nam.</p>

            </div>
        </div>
    );
};

export default FeedbackDetail;