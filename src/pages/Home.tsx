import React,  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lendsqrLogo from "../assets/lendsqrLogo.svg"
import pablo from "../assets/pablo.svg"

import Grid from '../components/Grid';
import '../styles/Grid.scss';
import '../styles/Home.scss';

// Interface for Login credentials
interface LoginCredentials {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim()); 
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value.trim()); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(email, password)
      // const credentials: LoginCredentials = { email, password }; // Use the interface for type safety

      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(credentials),
      // });
  
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
  
      // const data = await response.json();
      // console.log('Login successful:', data); 
  
      // navigate("/dashboard");
      navigate();
    } catch (error : any) {
      handleError(error.message);
    }
  };

  const handleError = (errorMessage: string) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000, // Auto-close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className='home-body'>
      <Grid>
        <div className="grid-item1 grid-item-hid">
          <div className='logo'>
            <img src={lendsqrLogo}  alt="logo" />
          </div>
          <img src={pablo} width={500} alt="logo" />
        </div>
        <div className="grid-item">
          <div className="form">
          <h2 className='form header'>Welcome!</h2>
          <h4 className='form header subTitle'>Enter details to login.</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? 'HIDE' : 'SHOW'}
              </span>
            </div>
            <h5 className='forget-password'>FORGOT PASSWORD</h5>
            <div className="form-input">
              <button className='login' type='submit'>log in</button>
            </div>
          </form>
          </div>
        </div>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Home;
