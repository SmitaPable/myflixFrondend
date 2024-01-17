// HomePage.js
import React from 'react';
//import backgroundImage from './LoginPage.webp';
import avatar from './avatar.png';

const HomePage = () => {
  const containerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px', // Add padding to the container
    position: 'relative',
  };

  const myflixStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'red',
    textShadow: '2px 2px 4px black',
    marginBottom: '20px',
  };

  const boxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: '8px',
    padding: '60px',
    textAlign: 'center',
    margin: 'auto', // Center the box horizontally
  };

  const headingStyle = {
    fontSize: '4rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    
  };

  const logoStyle = {
    width: '200px',
    marginRight: "auto",
    marginLeft: '120px',
    alignSelf: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={myflixStyle}>MyFLIX</h1>
      <div style={boxStyle}>
        <h1 style={headingStyle}>Who's Watching?</h1>
        <a href="http://44.218.188.107:8081" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          <img src={avatar} alt="avatar" style={logoStyle} />
        </a>
        <h3>Smita's Netflix</h3>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', width: '100%', position: 'absolute', bottom: '0' }}>
        &copy; {new Date().getFullYear()} Myflix | Created by Smita Sanjay Pable
      </footer>
    </div>
  );
};

export default HomePage;
