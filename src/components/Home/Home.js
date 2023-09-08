import React from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../images/banner/banner.png';
import './Home.css';
import Services from '../Services/Services';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div>
            <Card>
                <Card.Img
                variant="top"
                src={img}
                alt="Card Image"
                className="cardImageStyle"
                />
                <Card.Body>
                    <Card.Title className='cardTitleStyle'>Excellence in Healthcare: Your Wellness, Our Priority</Card.Title>
                    <Card.Text className='cardTextStyle'>
                        Touching Lives: Welcome to Apollo Hospitals. Our commitment to healthcare excellence extends to every patient.<br />With world-class medical expertise and compassionate care, we're here to improve your health and well-being.<br />Explore our services, meet our skilled team, and experience healthcare that truly makes a difference.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Compassionate Care, Advanced Medicine</small>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            {/* Another Section */}
            <h3 className='bg-warning text-center'>Medical Interior Impressions</h3>
            <SecondSection></SecondSection>
            {/* Another Section */}
            <Services></Services>
        </div> 
    );
};

export default Home;
