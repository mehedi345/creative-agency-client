import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState();

    useEffect(()=> {
        fetch('http://localhost:5000/userOrder?email=' + loggedInUser.email)
        .then(res => res.json())
        .then( data => console.log(data))
    })

    return (
        <div className="container d-flex">
            <div className="col-md-4  offset-1">
                <Sidebar/>
            </div>
            <div className="col-md-7">
            <h4>Service List</h4>
                    {/* <Row>
                        {
                            order.map(data => <Col className="m-3 p-3 box">
                                <Row>
                                    <Col md={6}>
                                        <img height={100} className="p-3 mr-1" src={`data:image/png;base64,${data.image.img}`} alt="..." />
                                    </Col>
                                    <Col md={6}>
                                        <Button className="mr-3 mt-5" variant="success">Done</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>{data.title}</h5>
                                        <p>{data.description}</p>
                                    </Col>
                                </Row>
                            </Col>)
                        }
                    </Row> */}
            </div>
        </div>
    );
};

export default ServiceList;