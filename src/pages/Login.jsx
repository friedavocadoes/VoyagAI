import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log('Email:', email);
    console.log('Password:', password);

    window.location.href = '/'; // Temporary redirection for demonstration
  };

  const containerStyles = {
    color: 'white',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  };

  const leftSideStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '40px',
    paddingRight: '10px',
    animation: 'fadeInLeft 2s ease-in',
  };

  const rightSideStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    animation: 'fadeInRight 2s ease-in',
  };

  const cardStyles = {
    backgroundColor: 'rgba(173, 216, 230, 0.25)', // Light blue with transparency
    borderRadius: '10px',
    textAlign: 'center',
    padding: '20px 40px',
    backdropFilter: 'blur(10px)',
    animation: 'zoomIn 2s ease-in',
  };

  const titleStyles = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: 'white',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const inputStyles = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#333', // Dark background for inputs
    color: '#fff', // White text for inputs
    outline: 'none',
  };

  const inputFocusStyles = {
    borderColor: '#ff6347', // Tomato color for focus border
  };

  const buttonStyles = {
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#32CD32', // Lime green color
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const buttonHoverStyles = {
    backgroundColor: '#228B22', // Darker green color for hover
  };

  const linkStyles = {
    color: '#b3b3b3', // Light grey color for text
    textDecoration: 'none',
  };

  const linkHoverStyles = {
    color: '#ffffff', // White color for hover text
  };

  const headingLeft = {
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    animation: 'fadeInLeft 2s ease-in',
  };

  const headingRight = {
    fontSize: '9rem',
    textAlign: 'left',
    marginBottom: '40px',
    color: '#FF4500', // Orange color
    animation: 'fadeInRight 2s ease-in',
  };

  return (
    <div style={containerStyles}>
      <style>{`
        @keyframes fadeInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div style={leftSideStyles}>
        <h2 style={headingLeft}>Everyday is</h2>
        <h1 style={headingRight}>Holiday</h1>
      </div>
      <div style={rightSideStyles}>
        <div style={cardStyles}>
          <h1 style={titleStyles}>VoyageAI</h1>
          <form onSubmit={handleSubmit} style={formStyles}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyles}
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyles.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyles}
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyles.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
            <button
              type="submit"
              style={buttonStyles}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
            >
              Login
            </button>
          </form>
          <a href="#" style={{ ...linkStyles, marginTop: '16px' }} onMouseOver={(e) => (e.target.style.color = linkHoverStyles.color)} onMouseOut={(e) => (e.target.style.color = linkStyles.color)}>
            Forgot password?
          </a>
          <p style={{ ...linkStyles, marginTop: '16px' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={linkStyles} onMouseOver={(e) => (e.target.style.color = linkHoverStyles.color)} onMouseOut={(e) => (e.target.style.color = linkStyles.color)}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
