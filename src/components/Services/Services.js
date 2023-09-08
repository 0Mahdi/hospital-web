import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceContainer from './ServiceContainer';

const Services = () => {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('./hospitalServices.JSON')
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => setError(err));
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='service-container' style={{ margin: '0 auto', padding: '20px' }}>
            <h2 className="title">All Services</h2>
            <Row xs={1} md={3} className="g-4">
                {services.map((service) => (
                    <ServiceContainer key={service.key} service={service} />
                ))}
            </Row>
        </div>
    );
};

export default Services;
