import { useRef, useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Login() {
  const inputRef = useRef(null)
  useEffect(() => {
    // set the page title when the component mounts
    document.title = 'Login - Beedo';
  }, []);

  const Navigate = useNavigate()
  const handleBEEDOClick = () => {
    Navigate(`/`)
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  async function login(e) {
    auth.login({username});
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    });
    if (response.ok === false) {
      alert('Incorrect email address or password');
    } else {
      alert('Successfully logged in')
      // Navigate(`/`)
    }
  }
    return (
        <div className='page'>
      <form className='formLogin' onSubmit={login}>
        <div className='form-content'>
          <h1 className='loginTitle' onClick={handleBEEDOClick}>BEEDO</h1>
          <h3 className='form-titleLogin'>Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              ref={inputRef}
              type="name"
              className='form-control mt-1'
              placeholder='Enter username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              id='field'
              required
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
              required
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