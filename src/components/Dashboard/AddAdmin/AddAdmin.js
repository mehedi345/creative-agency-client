import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({});
   
    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }
    let history = useHistory();
    
    const sendReview = (event) => {
        fetch('https://sleepy-river-40490.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
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
        <div>
            <div className="col-md-4 offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7 form-container">
                <h5>Make Admin</h5>
                 <form action="">
                     <div className="form-group">
                          <label For="email">Email</label>
                          <input type="email" name="email"  onBlur={handleBlur}  placeholder="example@example.com"/>
                     </div>
                     <button className="btn btn-success" type="submit">Submit</button>
                 </form>
            </div>
        </div>
    );
};

export default AddAdmin;