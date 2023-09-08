import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../images/footer.png';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="p-10"
        >
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to="/" className="link link-hover">Cardiology</Link>
                    <Link to="/" className="link link-hover">Orthopedics</Link>
                    <Link to="/" className="link link-hover">Neurology</Link>
                    <Link to="/" className="link link-hover">Gastroenterology</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link to="/" className="link link-hover">Dhaka - Block-E, Bashundhara Rd</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2023 - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
