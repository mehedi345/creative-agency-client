import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
       
        const history = useHistory();
        // capture data from form 
        const [info, setInfo] = useState({});
        const [file, setFile] = useState(null);
        // add service for user
        const addService = (event) => {
            const formData = new FormData()
            formData.append('file', file);
            formData.append('title', info.title);
            formData.append('description', info.description);
            fetch('http://localhost:5000/AddService', {
                method: 'POST',
                body: formData
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
        const handleBlur = e => {
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }
        const handleFileChange = (e) => {
            const newFile = e.target.files[0];
            setFile(newFile);
        }
    return (
        <div>
            <div className="col-md-4 offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7 form-container">
                <form action="">
                    <div className="form-group">
                        <label for="servicetitle">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea onBlur={handleBlur}  placeholder="Description"   className="form-control" rows="3" name="description" ></textarea>
                    </div>
                    <div className="form-group">
                        <label for="description">Icon</label>
                         <input type="file"  onChange={handleFileChange}/>
                    </div>
                    <button className="btn-success px-3 mr-5" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;