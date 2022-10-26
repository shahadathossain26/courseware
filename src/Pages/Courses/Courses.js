import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidenav from '../Shared/Sidenav/Sidenav';
import './Courses.css'

const Courses = () => {
    return (
        <div className='background'>
            <Container >
            <Row className='d-flex justify-content-between'>
                <Col  lg='3'>
                    <Sidenav></Sidenav>
                </Col>
                
                <Col lg='9'>
                    <Outlet></Outlet>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
};

export default Courses;