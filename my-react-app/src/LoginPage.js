// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './LoginPage.webp';

const LoginPage = () => {
  const navigate = useNavigate();
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Add your authentication logic here
    // For simplicity, assuming any email/phone and password are valid
    console.log('Login successful for:', emailOrPhoneNumber);

    // You can add more login logic or authentication API calls here

    // Redirect to homepage after successful login
    navigate('/HomePage');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#141414',
      color: '#fff',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'red', padding: '20px', position: 'absolute', top: '10px', left: '10px', textShadow: '2px 2px 4px black' }}>MyFLIX</h1>
      <div style={{
        flex: 1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'left',
          maxWidth: '500px',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                id="emailOrPhoneNumber"
                placeholder="Email or Phone number"
                value={emailOrPhoneNumber}
                onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1.2rem', backgroundColor: '#2C2C2C', color: 'lightgray' }}
                required
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1.2rem', backgroundColor: '#2C2C2C', color: 'lightgrey' }}
                required
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <button type="submit" style={{ backgroundColor: '#e50914', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', width: '100%' }}>Sign In</button>
            </div>
            <div style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
              New to MyFLIX? <Link to="/signup" style={{ color: '#e50914', textDecoration: 'underline' }}>Sign up now</Link>
            </div>
          </form>
        </div>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', width: '100%', position: 'absolute', bottom: '0' }}>
        &copy; {new Date().getFullYear()} Myflix | Created by Smita Sanjay Pable
      </footer>
    </div>
  );
};

export default LoginPage;
