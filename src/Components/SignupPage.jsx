import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }

  const handleMobileChange = event => {
    setMobile(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    // handle signup logic here
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Mobile: ${mobile}`);
  }

  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={handleMobileChange} />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
