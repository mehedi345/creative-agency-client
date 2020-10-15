import { Add, AddShoppingCart, StorageOutlined } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import SmsIcon from "@material-ui/icons/Sms";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);


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

              <Add /> Add service

              </li>
            <li>

              <PersonAddIcon /> <span>Make Admin</span>

            </li>
          </div>
        )}
      </ul>
    </section>
  );
};

export default Sidebar;