import React from 'react';
import lendsqrLogo from "../assets/lendsqrLogo.svg"
import pablo from "../assets/pablo.svg"

import Grid from '../components/Grid';
import '../styles/Grid.scss';
import '../styles/Home.scss';

const Home: React.FC = () => {
  return (
    <div className='home-body'>
      <Grid>
        <div className="grid-item grid-item-hid">
          <div className='logo'>
            <img src={lendsqrLogo} alt="logo" />
          </div>
          <img src={pablo} alt="logo" />
        </div>
        <div className="grid-item">
          <div className="form">
          <h2 className='form header'>Welcome!</h2>
          <h4 className='form header subTitle'>Enter details to login.</h4>
          <form>
          <div class="form-input">
              <input type="text" v-model.trim="atmTerminalID" @input="handleSearch"/>
              <label for="Atm Terminal ID">Atm Terminal ID</label>
          </div>
          </form>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Home;
