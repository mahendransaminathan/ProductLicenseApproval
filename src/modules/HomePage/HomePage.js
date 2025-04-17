import { Link } from "react-router-dom";
import './HomePage.css';
// import PersonDetails from "../PersonDetails/PersonDetails";
import React from "react";


function HomePage({setIsConditionMet})  // Add setIsConditionMet as a prop if needed
{
    const [showSignUpForm, setShowSignUpForm] = React.useState(false);
    const [showLoginForm, setShowLoginForm] = React.useState(false);
   
   const handleRegister = () => {
        // Handle registration logic here
        alert("Registration Successful");
        setShowSignUpForm(false);
    }

    const handleLogin = () => {
        // Handle login logic here
        alert("Login Successful");
        setShowLoginForm(false);
    }
   
    return (
        <div>
        <h1>Welcome to the Home Page</h1>


        <button onClick={() => setIsConditionMet(true)}>
            Go to Registration Page
        </button>
        
      {/* Sign Up Button */}
      {!showSignUpForm && (
        <button onClick={() => setShowSignUpForm(true)}>
          Sign Up
        </button>
      )}

        {/* Login Button */}
        {!showLoginForm && !showSignUpForm && (
            <button onClick={() => setShowLoginForm(true)}>
              Login
            </button>
          )}

      {/* Sign Up Form */}
      {showSignUpForm && (
        <div>
          <div>
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button onClick={handleRegister}>
            Register
          </button>
        </div>
      )}

      {/* Login Form */}
      {showLoginForm && (
        <div>
          <div>
            <label htmlFor="login-email">Email ID:</label>
            <input type="email" id="login-email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" placeholder="Enter your password" />
          </div>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
                
        </div>
    );
}

export default HomePage;
