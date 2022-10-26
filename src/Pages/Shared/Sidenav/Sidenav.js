import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import Button from 'react-bootstrap/Button';

const Sidenav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='vl px-3 courses shadow p-3 mb-5 bg-body rounded'>
            <h2 className='mb-4'> Our Courses</h2>

            <div className='w-60'>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='' to={`/courses/${course.id}`}>
                            <Button className='course-item fw-bold w-100' variant="primary" size="lg">
                                {course.name}
                            </Button>
                        </Link>
                    </p>)
                }

            </div>

        </div>

    );
};

export default Sidenav;