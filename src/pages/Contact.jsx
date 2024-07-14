import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  const containerStyles = {
    background: 'linear-gradient(to right, #373B44, #4286f4)',
    minHeight: '100vh',
    padding: '3rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 2s ease-in',
  };

  const contentStyles = {
    textAlign: 'center',
    maxWidth: '700px',
  };

  const titleStyles = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#767fb4',
  };

  const subtitleStyles = {
    marginTop: '1.5rem',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    color: '#e0e0e0',
    fontWeight: '300',
    fontFamily: 'Arial, sans-serif',
    animation: 'slideIn 2s ease-in',
  };

  const textStyles = {
    marginTop: '2.5rem',
    textAlign: 'left',
    fontFamily: 'Verdana, sans-serif',
    fontSize: '1rem',
    color: '#f5f5f5',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const highlightStyles = {
    color: '#f9b17a',
    fontWeight: 'bold',
  };

  const contactInfoStyles = {
    marginTop: '2.5rem',
    textAlign: 'center',
    color: '#e0e0e0',
  };

  const contactInfoItemStyles = {
    listStyleType: 'none',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const formStyles = {
    marginTop: '2.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const inputStyles = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s ease-in-out',
  };

  const buttonStyles = {
    background: '#767fb4',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        input:focus {
          border-color: #767fb4;
        }

        button:hover {
          background-color: #3f5c99;
        }
      `}</style>
      <div style={contentStyles}>
        <h1 style={titleStyles}>Contact Us</h1>
        <p style={subtitleStyles}>Get in touch and let's chat about your travel dreams!</p>
        <div style={textStyles}>
          <p>
            Have questions about VoyageAI or want to discuss your travel plans with our team? We're here to help! Feel free to reach out using the methods below:
          </p>
        </div>
        <div style={contactInfoStyles}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a' }}>Contact Information</h2>
          <ul style={contactInfoItemStyles}>
            <li>
              <span style={highlightStyles}>Email:</span> info@voyage.ai
            </li>
            <li>
              <span style={highlightStyles}>Phone:</span> +91 9207757005
            </li>
          </ul>
        </div>
        <div style={contactInfoStyles}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a' }}>Send Us a Message</h2>
          <form style={formStyles}>
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyles}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={inputStyles}
              required
            />
            <textarea
              placeholder="Your Message"
              style={{ ...inputStyles, height: '100px' }}
              required
            />
            <button type="submit" style={buttonStyles}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
