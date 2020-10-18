import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ServicesContext, UserContext } from '../../../App';
import './Order.css';



const Order = () => {
    const [services] = useContext(ServicesContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({})
    
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        const orderData = {...data,...services};
       

        fetch("https://sleepy-river-40490.herokuapp.com/addOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        })
          .then((res) => res.json())
          .then( success => {
            if(success){
                alert('order successfull placed');
                history.push('/serviceList');
            }
           
          });
         
      };
      const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    return (
        <div>
            <h5 className="ml-auto">{loggedInUser.name}</h5>
            <form className="form-container mt-5 " onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Your Name/Companie's Name"   defaultValue={loggedInUser.name}
                ref={register} />
                </div>
                <div className="form-group">
                    <input type="email" onBlur={handleBlur} className="form-control" name="email" placeholder="Your Email Address"  defaultValue={loggedInUser.email}
                ref={register}/>
                </div>
                <div className="form-group">
                    <input type="text" onBlur={handleBlur} className="form-control" placeholder="Graphics Design" name="title"  defaultValue={services.title} ref={register}/>
                </div>
                <div className="form-group">
                    <textarea placeholder="Project Details" onBlur={handleBlur} className="form-control" rows="3" name="description" defaultValue={services.description}  ref={register}></textarea>
                </div>
                <div className="d-flex">
                    <div className="col-md-6">
                        <input type="text" placeholder="price"/>
                    </div>
                    <div className="col-md-6">
                        <input type="file"/>
                    </div>
                </div>
                <button className="btn btn-brand text-white mt-3" type="submit">Send</button>
            </form>
           
        </div>
    );
};

export default Order;