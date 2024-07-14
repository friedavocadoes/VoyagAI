import React from 'react';

const AboutUs = () => {
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
    color: '#ffffff',
  };

  const subtitleStyles = {
    marginTop: '1.5rem',
    fontSize: '1.25rem', // Slightly smaller font size
    lineHeight: '1.75rem',
    color: '#e0e0e0',
    fontWeight: '300',
    fontFamily: 'Arial, sans-serif', // Changed font style
    animation: 'slideIn 2s ease-in',
  };

  const textStyles = {
    marginTop: '2.5rem',
    textAlign: 'left',
    fontFamily: 'Verdana, sans-serif', // Changed font style
    fontSize: '1rem', // Slightly smaller font size
    color: '#f5f5f5',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const highlightStyles = {
    color: '#f9b17a',
    fontWeight: 'bold',
  };

  const missionStyles = {
    color: '#f9b17a',
    fontWeight: 'bold',
  };

  const developersSectionStyles = {
    marginTop: '2.5rem',
    textAlign: 'center',
    color: '#e0e0e0',
  };

  const developersListStyles = {
    listStyleType: 'none',
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    animation: 'fadeInUp 2s ease-in-out',
  };

  const developerItemStyles = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    transition: 'background 0.3s ease-in-out',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontFamily: 'Courier New, monospace', // Changed font style
    animation: 'fadeInUp 2s ease-in-out',
  };

  const redTextStyles = {
    color: '#ef4444',
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

        .developer-item:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <div style={contentStyles}>
        <h1 style={titleStyles}>About VoyageAI</h1>
        <p style={subtitleStyles}>Your Personalized Travel Guide, Powered by AI</p>
        <div style={textStyles}>
          <p style={textStyles}>
            <span style={highlightStyles}>Born in 2024,</span> VoyageAI is the brainchild of passionate travelers and CSE students. We saw a gap in the travel planning landscape - a need for a tool that could spark the thrill of discovery while leveraging the power of AI.
          </p>
          <p style={textStyles}>
            <span style={missionStyles}>Our mission:</span> to be your travel companion, empowering you to explore the world with confidence. We craft personalized itineraries tailored to your unique interests and preferences. Whether you're a history buff, an adrenaline junkie, or a culinary adventurer, VoyageAI helps you design the perfect trip, ensuring a stress-free and unforgettable experience.
          </p>
        </div>
        <div style={developersSectionStyles}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Developed By:</p>
          <ul style={developersListStyles}>
            <li style={developerItemStyles} className="developer-item">Gautham Madhu - CSE Student</li>
            <li style={developerItemStyles} className="developer-item">Luthfi Nassir - CSE Student</li>
            <li style={developerItemStyles} className="developer-item">Archit Garg - CSE Student</li>
            <li style={developerItemStyles} className="developer-item">Kalpit Chaudhary - CSE Student</li>
            <li style={developerItemStyles} className="developer-item">Yashika Bhandari - CSE Student</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
