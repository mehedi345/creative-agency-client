import { LocalActivityRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import FeedbackDetail from './FeedbackDetail/FeedbackDetail';


const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    

    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="text-center font-weight-bold my-5">
                <h1>Clients <span style={{color:'#7AB259'}}>Feedback</span></h1>
            </div>
            <div className="d-flex row">
                {
                    reviews.length == 0 && <LoadingSpinner/>
                }
                {
                    reviews.map(review => <FeedbackDetail key={review.name} review={review}></FeedbackDetail>)
                }
            </div>
        </div>
    );
};

export default Feedback;