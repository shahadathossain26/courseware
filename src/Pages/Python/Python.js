import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiStar } from "react-icons/hi";
import Pythonimage from "./python.jpg"

const Python = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img className='img-fluid' style={{ width: '100%', height: '260px' }} variant="top" src={Pythonimage} />
            <Card.Body className='text-start'>
                <Card.Title className='fw-bold fs-3'>Python</Card.Title>
                <Card.Text >
                    <div className="reviews">
                        <div className="ratings ">
                            <HiStar className='fs-4 text-warning'></HiStar>
                            <HiStar className='fs-4 text-warning'></HiStar>
                            <HiStar className='fs-4 text-warning'></HiStar>
                            <HiStar className='fs-4 text-warning'></HiStar>
                            <HiStar className='fs-4 text-warning'></HiStar>
                            <span className='fw-lighter'>(953 reviews)</span>
                        </div>
                        <span className='fw-semibold fs-5'>Total Students:- 1482</span>


                    </div>
                    <p className='fw-semibold fs-4 mt-3'>Course Fee:- $280</p>
                </Card.Text>
                <Button variant="primary">See details</Button>
            </Card.Body>
        </Card>
    );
};

export default Python;