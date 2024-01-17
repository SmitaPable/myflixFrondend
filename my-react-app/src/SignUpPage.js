// SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './LoginPage.webp';

const SignupPage = ({ onSignup }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username,
      phoneNumber,
      email,
      password,
    };
    onSignup(newUser);
    // You may include additional logic here, such as API calls for user registration
    navigate('/homePage');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'transparent',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      margin: 0,
      display: 'flex',
      height: '100vh',
      position: 'relative',
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'red', padding: '20px', position: 'absolute', left: '10px', textShadow: '2px 2px 4px black' }}>MyFLIX</h1>

      <button
        onClick={() => {
          // Navigate back to the login page
          navigate('/');
        }}
        style={{ backgroundColor: '#e50914', color: '#fff', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2rem', position: 'absolute', top: '50px', right: '10px' }}
      >
        Sign In
      </button>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '50%', // Adjust width as needed
        boxSizing: 'border-box',
        marginTop: '20px',
        margin: 'auto',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Unlimited films, TV programmes and more</h1>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Watch anywhere. Cancel at any time.<br></br>
          <br></br>Ready to watch? Enter your email to create or restart your membership.</h4>

        <form onSubmit={handleSubmit} style={{ width: '80%', margin: 'auto' }}>
          {/* Username Input */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontSize: '1.2rem' }}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '60%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Phone Number Input */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '8px', fontSize: '1.2rem' }}>Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: '60%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontSize: '1.2rem' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '60%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontSize: '1.2rem' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '60%', padding: '10px', boxSizing: 'border-box', border: '1px solid black', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#2C2C2C' }}
              required
            />
          </div>

          {/* Submit Button */}
          <div style={{ marginBottom: '20px' }}>
            <button type="submit" style={{ backgroundColor: '#e50914', color: '#fff', padding: '8px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2rem', width: '40%' }}>Sign Up</button>
          </div>
        </form>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center', width: '100%', position: 'absolute', bottom: '0' }}>
        &copy; {new Date().getFullYear()} Myflix | Created by Smita Sanjay Pable
      </footer>
    </div>
  );
};

export default SignupPage;
