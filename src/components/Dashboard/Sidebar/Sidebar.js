import { Add, AddShoppingCart, StorageOutlined } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import SmsIcon from "@material-ui/icons/Sms";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
      fetch('http://localhost:5000/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [])

  useEffect(() => {
      fetch('http://localhost:5000/isUser', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => {
              setIsUser(data)
              
          });
  }, [])


  return (
    <section style={{ height: "100vh" }}>
      <img className="mt-5 mb-5" style={{ height: "40px" }} src={logo} alt="" />
      <ul className="sidebar">
       
        <li>
          <Link to="/order">
            <AddShoppingCart /> <span>order</span>
          </Link>
        </li>
        <li>
            <Link to="/serviceList">
                <StorageOutlined /> <span>Service List</span>
            </Link>
        </li>
        <li>

          <Link to="/review"><SmsIcon /> <span>Review</span></Link>

        </li>
       
        {isAdmin && (
          <div>
            <li>
            <Link to="/adminservicelist">
                <StorageOutlined /> Service list
              </Link>
            </li>
            <li>
               <Link to="/addservice">
                  <Add /> Add service
               </Link>
            </li>
            <li>
              <Link to="/makeadmin">
               <PersonAddIcon /><span>Make Admin</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Sidebar;