import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError('');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordStrength = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else if (!validatePasswordStrength(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
    } else {
      // Proceed with authentication or form submission
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div style={{ width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
  <label style={{ color: 'black' }}>Email:</label>
  <input type="text" placeholder="Enter your email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
  {emailError && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{emailError}</p>}
</div>
<div style={{ marginBottom: '15px' }}>
  <label style={{ color: 'black' }}>Password:</label>
  <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
  {passwordError && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{passwordError}</p>}
</div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#EFBC9B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
      </form>
    </div>
  );
};

export default SignUpForm;
