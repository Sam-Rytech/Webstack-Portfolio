import { useRef, useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Login() {
    const inputRef = useRef(null)

  const Navigate = useNavigate()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  async function login(e) {
    auth.login({emailAddress});
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({emailAddress, password}),
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    });
    if (response.ok === false) {
      alert('Incorrect email address or password');
    } else {
      Navigate(`/home`)
    }
  }
    return (
        <div className='page'>
      <form className='form' onSubmit={login}>
        <div className='form-content'>
          <h1 className='loginTitle'>BEEDO</h1>
          <h3 className='form-title'>Sign In</h3>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              ref={inputRef}
              type="email"
              className='form-control mt-1'
              placeholder='Enter email'
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
              id='field'
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder='Enter password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              id='field'
            />
          </div>
          <div className="d-grid gap-2 mt-3" id='submit' >
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          <p id='ask'>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
    )
}

export default Login;