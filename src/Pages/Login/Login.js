import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';



const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, singIn } = useContext(AuthContext);
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
            .catch(error => {
                console.error(error)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;


        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div>
            
            <Form onSubmit={handleSubmit} className='text-start w-25 m-auto mt-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <p>Doesn't have an account? <Link to={'/register'}>Create an account</Link></p>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text><br></br>
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