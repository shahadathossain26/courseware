import React from 'react';

const Blog = () => {
    return (

        <div className='container'>
            <h2 className='text-center mt-4 mb-5'>These are some question and there that you should know</h2>
            <div>
                <h3>1. What is cors?</h3>
                <p>Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request</p>


                <h3>2. Why are you using firebase? What other options do you have to implement authentiation?</h3>
                <p>Ans: Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users.

                    12 User Authentication Platforms [Auth0, Firebase Alternatives]
                    STYTCH.
                    Ory.
                    Supabase.
                    Okta.
                    PingIdentity.
                    Keycloak.
                    Frontegg.
                    Authress.

                </p>


                <h3>3. How does the private route work?</h3>
                <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>


                <h3>3. What is node? How does node work?</h3>
                <p>Ans: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;