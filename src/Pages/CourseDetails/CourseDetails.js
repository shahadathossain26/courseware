import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import { HiStar } from "react-icons/hi";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div className='d-flex justify-content-between ps-5 pt-5 pe-0'>
            <div className="course-details w-40">
                <h2 className='text-center fw-bold'>Learn {courseDetails.name} from scratch.</h2>
                <div className='d-flex justify-content-between pt-3'>
                    <div className=' w-30 border border-primary text-primary px-3 py-2 rounded bg-white text-center'>
                        <p className='m-0 fs-5'>Duration</p>
                        <p className='fs-4 fw-bold'>{courseDetails.duration}</p>
                    </div>
                    <div className=' w-30 border border-primary text-primary px-3 py-2 rounded bg-white text-center'>
                        <p className='m-0 fs-5'>Lecture</p>
                        <p className='fs-4 fw-bold'>{courseDetails.lecture}</p>
                    </div>
                    <div className='border border-primary text-primary px-3 py-2 rounded bg-white text-center'>
                        <p className='m-0 fs-5'>Project</p>
                        <p className='fs-4 fw-bold'>{courseDetails.project}+</p>
                    </div>
                </div>
                <div className="reviews">
                    <div className="ratings ">
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <HiStar className='fs-4 text-warning'></HiStar>
                        <span className='fw-lighter'>(514 reviews)</span>
                    </div>
                    <span className='fw-semibold fs-5'>Total Students:- {courseDetails.review}</span>


                </div>
                <p className='fw-semibold fs-4 mt-3'>Course Fee:- ${courseDetails.fee}</p>
            </div>
            <div className='ms-5'>
                <Image className="course-image rounded" src={courseDetails.image}></Image>
            </div>
        </div>
    );
};

export default CourseDetails;