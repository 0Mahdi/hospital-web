import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const ServiceContainer = (props) => {
    const { key, img, name, description, details, det_img } = props.service || {};

    const navigate = useNavigate();

    const handleDetails = () => {
        const uri = `/details/${key}`;
        navigate(uri, { state: { details, det_img } });
    }
    

    const cardImageStyle = {
        height: '200px',
        objectFit: 'cover',
    };

    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} style={cardImageStyle} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Button onClick={() => handleDetails(key)} variant="outline-success">More Details</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceContainer;
