import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <p><span className="label">Mail:</span> <span className="value">info@rhyno.in</span></p>
                <p><span className="label">Mobile no.:</span> <span className="value">+91-9023987528</span></p>
                <p><span className="label">Location:</span> <span className="value">Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</span></p>
            </div>
            
        </div>
    );
};

export default Contact;
