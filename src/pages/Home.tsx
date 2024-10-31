import React,  { useState } from 'react';
import lendsqrLogo from "../assets/lendsqrLogo.svg"
import pablo from "../assets/pablo.svg"

import Grid from '../components/Grid';
import '../styles/Grid.scss';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <form>
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
              <button className='login'>log in</button>
            </div>
          </form>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Home;
