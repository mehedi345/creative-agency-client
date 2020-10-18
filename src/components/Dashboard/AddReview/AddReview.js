import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [clientInfo, setClientInfo] = useState({});
    const { name, photo } = loggedInUser;
   
    const handleBlur = e => {
        const newInfo = { ...clientInfo, name, photo };
        newInfo[e.target.name] = e.target.value;
        setClientInfo(newInfo);
    }
    let history = useHistory();
    const sendReview = (event) => {
        fetch('https://sleepy-river-40490.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientInfo)
        })
            .then(res => res.json())
            .then(value => {
                if (value) {
                    history.push("/home");
                } else {
                    alert("Could Not Add !!")
                }
            })
        event.preventDefault();
    }
    return (
        <div className="d-flex">
            <div className="col-md-4 offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7">
                <form className="form-container mt-5" onSubmit={sendReview}>
                    <div className="form-group">
                         <input type="text" onBlur={handleBlur}  className="form-control" defaultValue={loggedInUser.name} placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                         <input type="text" onBlur={handleBlur} className="form-control"  placeholder="Companies Name Designation"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Description" onBlur={handleBlur}  className="form-control" rows="3" name="description" ></textarea>
                    </div>
                    <button className="btn btn-brand text-white mt-3" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;