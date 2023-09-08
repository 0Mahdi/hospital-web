import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
    const location = useLocation();
    const { details, det_img } = location.state || {};

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={det_img} />
                <Card.Body>
                    <Card.Title>Service Details</Card.Title>
                    <Card.Link href={details}>Card Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;