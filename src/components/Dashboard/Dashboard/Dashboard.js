import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
        <div className="row">
            <div className="col-md-4  offset-1 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 col-sm-6 col-12">
                <Order/>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;