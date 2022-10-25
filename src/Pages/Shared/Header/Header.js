import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='px-5 py-4 ' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><Link to={'/'}>Images</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-items"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none text-black fw-bold m-2' to={'/home'}>Home</Link>
                        <Link className='text-decoration-none text-black fw-bold m-2' to={'/courses'}>Courses</Link>
                        <Link className='text-decoration-none text-black fw-bold m-2' to={'/support'}>Support</Link>
                        <Link className='text-decoration-none text-black fw-bold m-2' to={'/blog'}>Blog</Link>
                        <Link className='text-decoration-none text-black fw-bold m-2' to={'/contactus'}>Contact Us</Link>
                    </Nav>
                    <Link to={'/login'}><Button variant="outline-primary">Sign In</Button></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;