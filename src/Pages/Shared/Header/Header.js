import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
// import { FaUser } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='px-5 py-4  shadow-lg p-3  bg-body rounded' expand="lg">
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
                    <Nav>
                        {/* <Nav.Link href="#deets">{
                            user.uid ?
                                <>
                                    <span>{user.displayName}</span>
                                    <button onClick={handleLogOut}>logout</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>

                                </>


                        }
                        </Nav.Link> */}
                        {/* <Nav.Link eventKey={2} href="#memes">
                            {user.photoURL ?
                                <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link> */}
                    </Nav>
                    <div>
                        {user?.uid ?
                            <>

                                <Image title={user.displayName} style={{ height: '50px', cursor: 'pointer' }} roundedCircle src={user.photoURL}></Image>
                                <Button className='ms-3' onClick={handleLogOut} variant="primary">Sign out</Button>

                            </>
                            :
                            <>
                                <Link className='ms-3' to={'/login'}><Button variant="outline-primary">Sign In</Button></Link>

                            </>
                        }
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;