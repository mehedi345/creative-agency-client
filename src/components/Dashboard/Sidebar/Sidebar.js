import { Add, AddShoppingCart, StorageOutlined } from '@material-ui/icons';
import React, { useContext, useState} from 'react';
import SmsIcon from "@material-ui/icons/Sms";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png";
import './Sidebar.css';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    return (
        <section style={{ height: "100vh" }}>
        <img className="mt-5 mb-5" style={{ height: "40px" }} src={logo} alt="" />
        <ul className="sidebar">
          <li>
          
              <AddShoppingCart/> <span>order</span>
            
          </li>
          <li>
           
              <StorageOutlined/>  <span>Service List</span>
           
          </li>
          <li>
            
              <SmsIcon /> <span>Order</span>
           
          </li>
          {isAdmin && (
            <div>
              <li>
                
                  <Add/> Add service
              
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