import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';


const AdminServiceList = () => {
    const [allServices, setAllServices] = useState([]);
    // Display all Services
    useEffect(() => {
        fetch('https://sleepy-river-40490.herokuapp.com/getAllServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    
    return (
        <div>
            <h4>Service List</h4>
            <div className="card p-2 mr-2">
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Details</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allServices.length === 0 && <LoadingSpinner/>
                        }
                        {
                            allServices.map(data =>

                                <tr>
                                    <td><strong>{data.name}</strong></td>
                                    <td>{data.email}</td>
                                    <td><strong>{data.title}</strong></td>
                                    <td>{data.description}</td>
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AdminServiceList;