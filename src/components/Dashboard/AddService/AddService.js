import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    return (
        <div>
            <div className="col-md-4 offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7 form-container">
                <form action="">
                    <div className="form-group">
                        <label for="servicetitle">Service Title</label>
                        <input type="text" className="form-control" name="title" id=""/>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea placeholder="Description"   className="form-control" rows="3" name="description" ></textarea>
                    </div>
                    <button className="btn-primary px-3 mr-5" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;