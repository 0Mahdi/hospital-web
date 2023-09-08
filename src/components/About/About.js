import React from 'react';
import sp1 from '../../images/banner/sp.png';
import { Card, CardImg, Button } from 'react-bootstrap';

const CardiologyTreatment = () => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    };

    const cardStyle = {
        width: '18rem',
        marginBottom: '20px',
        margin: '10px'
    };


    return (
        <div style={{padding: '20px' }}>
            <Card className="text-center">
                <CardImg src={sp1} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title>Cardiology Treatment</Card.Title>
                    <Card.Text>
                        As of my last knowledge update in September 2021, Apollo Hospitals Dhaka is a well-known medical facility in Bangladesh that offers a wide range of medical services, including cardiology. Cardiology is a branch of medicine that deals with the diagnosis and treatment of heart and blood vessel diseases. Apollo Hospitals Dhaka provides specialized cardiology treatments and services. However, the specific treatments and services offered may have evolved or expanded since then. To get the most up-to-date information about cardiology services at Apollo Hospitals Dhaka, I recommend visiting their official website or contacting them directly.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                <p className='text-center m-4 bg-info'>Some common cardiology procedure titles or names include:</p>
            <div style={containerStyle}>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>Angioplasty and Stent Placement</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Specialized Cardiology Procedure</Card.Subtitle>
                    <Card.Text>
                        This procedure involves opening blocked or narrowed blood vessels (arteries) in the heart using a balloon and placing a stent to keep the artery open.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>Bypass Surgery</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Specialized Cardiology Procedure</Card.Subtitle>
                    <Card.Text>
                        This is also known as "Coronary Artery Bypass Grafting (CABG)" and involves creating new pathways for blood flow around blocked or narrowed coronary arteries.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>Cardiac Catheterization</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Specialized Cardiology Procedure</Card.Subtitle>
                    <Card.Text>
                    This procedure involves threading a thin tube (catheter) through blood vessels to diagnose or treat heart conditions. The title would typically be "Cardiac Catheterization"
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
};

export default CardiologyTreatment;