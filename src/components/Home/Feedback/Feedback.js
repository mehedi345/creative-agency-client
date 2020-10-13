import React from 'react';
import FeedbackDetail from './FeedbackDetail/FeedbackDetail';

const reviewData = [
    {
        name: "Nash Patrik",
        img: "https://i.imgur.com/ra9Hbvl.png"
    },
    {
        name: "Miriam Barron",
        img: "https://i.imgur.com/YO7ZGeC.png"
    },
    {
        name: "Bria Malone",
        img: "https://i.imgur.com/bfgGP9i.png"
    },
]
const Feedback = () => {
    return (
        <div>
            <div className="text-center font-weight-bold my-5">
                <h1>Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
            </div>
            <div className="d-flex row">
                {
                    reviewData.map(review => <FeedbackDetail key={review.name} review={review}></FeedbackDetail>)
                }
            </div>
        </div>
    );
};

export default Feedback;