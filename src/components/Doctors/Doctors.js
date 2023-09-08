import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Doctors = () => {
    const cardStyle = {
        width: '18rem',
        margin: '20px',
        padding: '10px',
        marginBottom: '20px',
    };
    return (
        <div>
            <h4 className='bg-success text-center'>For An Appointment Anytime Any doctor, Please Call<br />Hotline: 0000</h4>
            
            <Container fluid>
            <Row>
                <h6>Medical Oncology Specialist</h6>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Ferdous Shahriar Sayed</Card.Title>
                            <Card.Text>MBBS, MD</Card.Text>
                            <p>Radiotherapy</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. (Prof.) Shibashish Bhattacharyya</Card.Title>
                            <Card.Text>MBBS, MD (Medicine), DM</Card.Text>
                            <p>Medical Oncology</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Arman Reza Chowdhury</Card.Title>
                            <Card.Text>MBBS, FCPS </Card.Text>
                            <p>Radiotherapy</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h6>Cardiology Specialist</h6>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Shams Munwar</Card.Title>
                            <Card.Text>MBBS, MRCP (UK), D.Card</Card.Text>
                            <p>London</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Prof. (Dr.) Md. Shahabuddin Talukder</Card.Title>
                            <Card.Text>MBBS, D.Card. (DU), FCPS</Card.Text>
                            <p>Cardiology</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Kazi Atiqur Rahman</Card.Title>
                            <Card.Text>MBBS, MD (Cardiology), MRCP (UK)</Card.Text>
                            <p>Radiotherapy</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h6>Child Specialist</h6>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Farzana Islam</Card.Title>
                            <Card.Text>MBBS (DMC), DCH (BICH), MCPS</Card.Text>
                            <p>Specialist and Head-Child Development</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Ms. Tarana Anis</Card.Title>
                            <Card.Text>N/A</Card.Text>
                            <p>Child Psychologist</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Ferdous Shahriar Sayed</Card.Title>
                            <Card.Text>N/A</Card.Text>
                            <p>Child Development Therapist</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h6>Diagnostic & Interventional Radiology Specialist</h6>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Sania Ahsan</Card.Title>
                            <Card.Text>MBBS, M.Phil, FCPS</Card.Text>
                            <p>Diagnostic Radiology</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Biva Shrestha Khan</Card.Title>
                            <Card.Text>MBBS, MD</Card.Text>
                            <p>Radiology & Imaging</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Prof. Dr. Brig. Gen. (Retd.) Md. Saiful Islam</Card.Title>
                            <Card.Text>MBBS, FCPS</Card.Text>
                            <p>Radiology & Imaging</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h6>Orthopedic Specialist</h6>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. M. Ali</Card.Title>
                            <Card.Text>MBBS, MS (Ortho.)</Card.Text>
                            <p>Orthopaedics</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Professor Dr. Syed Shahidul Islam</Card.Title>
                            <Card.Text>MBBS, MS</Card.Text>
                            <p>Orthopedics</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Dr. Vijay T K Titus</Card.Title>
                            <Card.Text>MBBS, MS</Card.Text>
                            <p>Orthopedics</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Doctors;