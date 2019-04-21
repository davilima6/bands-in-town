import React, { Component } from 'react';
import { BandsInTownInput, BandsInTownResults} from '../';
import './BandsInTownApp.css';

class BandsInTownApp extends Component {
  render() {
    return (
      <div className="bit-app">
        <header className="bit-app-header full-center">
          <h1>Bands In Town</h1>
        </header>
        <div class="bit-app-wrapper full-center">
          <BandsInTownInput></BandsInTownInput>
          <BandsInTownResults></BandsInTownResults>
        </div>
      </div>
    );
  }
}

export default BandsInTownApp;
