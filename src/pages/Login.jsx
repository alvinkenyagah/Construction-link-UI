import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logo } from "../assets/";
import './login.css'
import swal from 'sweetalert';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
// import { useAuth } from '../AuthContext'; // Import useAuth hook

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const { login } = useAuth(); // Access login function from AuthContext

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello!!')

    login(username, password)
      .then(() => {
        swal({
          title: 'Success',
          text: 'Login Successful!',
          icon: 'success',
          timer: 1000,
          buttons: false,
        }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        swal({
          title: 'Error',
          text: 'Invalid login',
          icon: 'error',
          buttons: false,
        });
        setError('An error occurred. Please try again.'); // Set error message
      });
  };

 
  return (
    <>
    <div className="bg-gray-500">
        <Navbar/>
    </div>

    <div className='cover'>
      <div className={`cover-login fade-in`}>
        <img src={logo} alt='Logo' id='loginbrandimg' />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type='password'
            placeholder=' Password'
            value={password}
            onChange={handlePasswordChange}
          />
          
          {error && <p className='error-message'>{error}</p>}
          <button type='submit'>Log in</button>
        </form>
        <p style={{ marginTop: '50px' }}>
          Not registered?{' '}
          <Link to='/signup'>
            <em style={{ fontSize: '17px', textDecoration: 'none' }}>
              Sign up today!
            </em>
          </Link>{' '}
        </p>
      </div>
    </div>
    <div className="bg-gray-500">
    <Footer/>
    </div>
    </>
    
  );
}

export default Login;