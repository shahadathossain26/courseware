import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidenav from '../Shared/Sidenav/Sidenav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col lg='3'>
                    <Sidenav></Sidenav>
                </Col>
                
                <Col lg='9'>
                    <Outlet></Outlet>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Courses;