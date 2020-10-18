import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AdminServiceList from './components/Dashboard/AdminServiceList/AdminServiceList';
import AddService from './components/Dashboard/AddService/AddService';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';


export const ServicesContext = createContext();
export const UserContext = createContext();

function App() {
  const [services, setServices] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ServicesContext.Provider value={[services, setServices]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/order">
              <Dashboard />
            </Route>
            <Route path="/serviceList">
              <ServiceList />
            </Route>
            <Route path="/review">
              <AddReview/>
            </Route>
            <Route path="/adminservicelist">
              <AdminServiceList/>
            </Route>
            <Route path="/addservice">
               <AddService/>
            </Route>
            <Route path="/makeadmin">
                <AddAdmin/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </ServicesContext.Provider>
  );
}

export default App;
