import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseCheckout = useLoaderData();
    return (
        <div>
            <h1 className='text-center fs-1 mt-5'>Buy the latest premium access of <span className='text-primary'>{courseCheckout.name}</span></h1>
        </div>
    );
};

export default Checkout;