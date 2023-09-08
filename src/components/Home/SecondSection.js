import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'; 
import img1 from '../../images/slider/1.png';
import img2 from '../../images/slider/2.png';
import img3 from '../../images/slider/3.png';
import img4 from '../../images/slider/4.png';
import img5 from '../../images/slider/5.png';

const SecondSection = () => {
    const carouselStyle = {
        margin: '20px',
        padding: '20px', 
      };

      const imageStyle = {
        width: '50%', 
        height: '50%', 
      };
  return (
    <div>
      <Carousel style={carouselStyle}>
        <Carousel.Item>
          <ExampleCarouselImage src={img1} text="First slide" style={imageStyle}/>
          <Carousel.Caption className='text-dark'>
            <h3>A Warm Welcome at Apollo Hospital</h3>
            <p>At Apollo Hospital, our reception area is where your journey to wellness begins. Our friendly staff is here to assist you with a warm smile and expert guidance. Whether you're a new patient or returning for a check-up, we're dedicated to making your visit comfortable and stress-free. Your health and well-being are our top priorities, and we look forward to serving you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img2} text="Second slide" style={imageStyle}/>
          <Carousel.Caption>
            <h3>Your Compassionate Guide at the Apollo Help Center</h3>
            <p>Our hospital help center is designed to be a reassuring presence, a place where you can find answers, support, and the information you need during your healthcare journey. Our dedicated team is here to assist you with compassion and expertise, ensuring you have a smooth and well-informed experience at Apollo Hospital. We're committed to providing the care and guidance you deserve, every step of the way.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img3} text="Third slide" style={imageStyle}/>
          <Carousel.Caption className='text-white'>
            <h3>Your Comfortable Haven for Healing</h3>
            <p>
            Our hospital rooms are thoughtfully designed to provide a soothing and safe environment for your recovery. Equipped with modern amenities, our spacious and clean rooms aim to make your stay as comfortable as possible.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img4} text="Fourth slide" style={imageStyle}/>
          <Carousel.Caption className='text-dark'>
            <h3>Connecting You to Care, One Call at a Time</h3>
            <p>
            At Apollo Hospital, we understand that clear communication is vital for your peace of mind and well-being. Our dedicated call services team is available around the clock to answer your questions, provide assistance, and ensure that you're always connected to the care you need.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img5} text="Fifth slide" style={imageStyle}/>
          <Carousel.Caption className='text-primary'>
            <h3>Advanced Care in Our ICU</h3>
            <p>
            Our ICU is a place of advanced medical care, where our highly skilled team works tirelessly to provide the highest level of treatment and support. Equipped with state-of-the-art technology, our ICU rooms are designed to monitor and manage critical conditions with precision and expertise.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    );
};

export default SecondSection;
