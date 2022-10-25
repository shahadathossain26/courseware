import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Login = () => {
    return (
        <div>
            <Form className='text-start w-25 m-auto mt-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <p>Doesn't have an account? <Link to={'/register'}>Create an account</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='fs-5 fw-bold mt-4'>Or</p>
            <ButtonGroup vertical >
                <Button className='mb-3 rounded' variant="outline-primary">Login with Google</Button>
                <Button className='rounded' variant="outline-primary">Login with facebook</Button>
                
            </ButtonGroup>
        </div>

    );
};

export default Login;