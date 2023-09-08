import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img1 from '../../images/logo.png';
import { AuthContext } from '../providers/AuthProvider';

const Headers = () => {
  const {user, logOut} =useContext(AuthContext)
  const handleLogout = () =>{
    logOut()
    .then(result => {})
    .catch(error => console.error(error));
  }

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          {/* Logo with a Link */}
          <Navbar.Brand as={Link} to="/">
            <img src={img1} alt="Logo" height="40" /> 
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/article">Achievement</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav.Item>
              {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogout}>Log Out</button></span>}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;

