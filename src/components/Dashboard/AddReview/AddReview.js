import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="d-flex">
            <div className="col-md-4 offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7">
                <form className="form-container mt-5">
                    <div className="form-group">
                         <input type="text" className="form-control" defaultValue={loggedInUser.name} placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                         <input type="text" className="form-control"  placeholder="Companies Name Designation"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Description"  className="form-control" rows="3" name="description" ></textarea>
                    </div>
                    <button className="btn btn-brand text-white mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;