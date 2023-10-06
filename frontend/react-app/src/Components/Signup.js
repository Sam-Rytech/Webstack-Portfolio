import React, {useEffect, useRef, useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'


function SignUp() {
  useEffect(() => {
    // set the page title when the component mounts
    document.title = 'Sign Up - Beedo';
    }, []);
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    }, [])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };
  const register = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({firstName, lastName, emailAddress, phoneNumber, password}),
    });
    if (response.ok === false) {
      alert('Email address or employee ID already exists');
    } else {
      alert('Account created successfully');
      window.location.href = '/login';
    }
  };
  return (
    <div className='page'>
      <form className='form' onSubmit={register}>
        <h3 className='form-title'>BEEDO</h3>
        <div className='inputSection'>
        <div className='form-group mt-3' id='inputLabel'>
          <label>First Name</label>
          <div className='form-check form-check-inline'>
              <input
                ref={inputRef}
                type='name'
                className='form-control mt-1'
                placeholder='Enter first name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                id='field'
                field='firstName'
              />
          </div>
        </div>
          <div className='form-group mt-3' id='inputLabel'>
            <label>Last Name</label>
          <div className='form-check form-check-inline'>
              <input
                type='name'
                className='form-control mt-1'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder='Enter last name'
                id='field'
                field='lastName'
              />
          </div>
        </div>
        <div className='form-group mt-3' id='inputLabel'>
            <label>Email Address</label>
          <div className='form-check form-check-inline'>
              <input
                type='email'
                className='form-control mt-1'
                placeholder='Enter email'
                value={emailAddress}
                onChange={e => setEmailAddress(e.target.value)}
                id='field'
                field='emailAddress'
              />
          </div>
        </div>
        <div className='form-group mt-3' id='inputLabel'>
            <label>Phone Number</label>
          <div className='form-check form-check-inline'>
            <input
              id='field'
              type="tel"
              className="form-control"
              name='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder='Enter phone number'
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              field='phoneNumber'
            />
          </div>
        </div>
        <div className='form-group mt-3' id='inputLabel'>
            <label>Password</label>
          <div className='form-check form-check-inline'>
              <input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                className='form-control mt-1'
                placeholder='Enter password'
                id='field'
                field='password'
              />
          </div>
        </div>
          <div className='form-group mt-3' id='inputLabel'>
            <label>Confirm Password</label>
            <div className='form-check form-check-inline'>
              <input
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className='form-control mt-1'
                placeholder='Confirm password'
                id='field'
                field='confirmPassword'
              />
            </div>
          </div>
          </div>
        <div id='passwordMatch'>
          {passwordsMatch ? (
            <p className='text-success'>Passwords match</p>
              ) : (
                  <p className='text-danger'>Passwords do not match</p>
            )}
        </div>
        <div className='d-grid gap-2 mt-3' id='submit'>
            <button type='submit' className='btn btn-primary' id='submitSignUp'>
              Create account
            </button>
        </div>
        <p id='ask'>
          Have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp