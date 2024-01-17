// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignUpPage'; // Assuming you have a SignupPage component
import HomePage from './HomePage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (emailOrPhoneNumber) => {
    // Implement your login logic here
    console.log('Login successful for:', emailOrPhoneNumber);
    // You can add more login logic or authentication API calls here

    // Assuming you have a way to set the logged-in user in the state
    setLoggedInUser(emailOrPhoneNumber);
  };

  const handleSignup = (newUser) => {
    // Implement your signup logic here
    console.log('Signup successful for:', newUser);
    // You can add more signup logic or API calls here
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage onSignup={handleSignup} />}
        />
        <Route
          path="/homepage"
          element={<HomePage user={loggedInUser} />}
        />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
