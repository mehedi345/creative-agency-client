import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import Order from '../Order/Order';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
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
        <section>
        <div className="row">
            <div className="col-md-4  offset-1 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 col-sm-6 col-12">
                    {
                        isUser && <Order/>
                    }
                    {
                        isAdmin && <AdminServiceList/>
                    }
            </div>
        </div>
    </section>
    );
};

export default Dashboard;