import React from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Bannerimage from './thumb.png';
import Welcomeimage from './discussion.png';
import { Image } from 'react-bootstrap';


const Home = () => {
    return (
        <div className=''>
          <section className='banner d-lg-flex container justify-content-between'>
            <div className="banner-info me-5 w-45 pt-5">
              <h1 className='banner-title fw-bold mb-4'>A <span className='text-primary'>Learing Platform</span> That Helps You To Learn Faster</h1>
              <p className='mb-3'>Let us help you to learn the programming language that you wanted to learn to becoming a great programmer and a great person.</p>
              <Button className='p-2 fs-6 fw-bold' variant="primary">Explore Our Courses</Button>
            </div>
            <div >
              <Image className="banner-image" src={Bannerimage}></Image>
            </div>
          
          </section>
        </div>
    );
};

export default Home;   