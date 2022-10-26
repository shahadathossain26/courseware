import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiStar } from "react-icons/hi";
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <Card style={{ width: '20rem' }}>
        <Card.Img className='img-fluid' style={{ width: '100%', height: '260px' }} variant="top" src={course.image} />
        <Card.Body className='text-start'>
            <Card.Title className='fw-bold fs-3'>{course.name}</Card.Title>
            <Card.Text >
                <div className="reviews">
                    <div className="ratings ">
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <span className='fw-lighter'>(514 reviews)</span>
                    </div>
                    <span className='fw-semibold fs-5'>Total Students:- {course.review}</span>


                </div>
                <p className='fw-semibold fs-4 mt-3'>Course Fee:- ${course.fee}</p>
            </Card.Text>
            <Button variant="primary">See details</Button>
        </Card.Body>
    </Card>
    );
};

export default Course;