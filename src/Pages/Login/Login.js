import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {  GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleGithubProvider = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
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
                <Button onClick={handleGoogleSignIn} className='mb-3 rounded' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubProvider} className='rounded' variant="outline-primary"><FaFacebook></FaFacebook> Login with facebook</Button>

            </ButtonGroup>
        </div>

    );
};

export default Login;