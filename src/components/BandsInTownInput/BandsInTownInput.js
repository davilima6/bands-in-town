import React, { Component } from 'react';
import  './BandsInTownInput.css';

class BandsInTownInput extends Component {
  render() {
    return (
      <section className="bit-input full-center">
        <form>
          <div className="form-field">
            <input type="text" name="query" className="form-input"></input>
          </div>
          <div className="form-actions">
            <button type="submit"  className="form-btn">Query Artist</button>
          </div>
        </form>
      </section>
    );
  }
}

export default BandsInTownInput;
