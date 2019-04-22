import React, { useState } from "react";
import "./BandsInTownInput.css";

/**
 * BandsInTownInput component
 * @function BandsInTownInput
 * @returns {string} Markup of the component
 */
const BandsInTownInput = props => {
  const [artistName, _setArtistName] = useState("");

  const setArtistName = _artistName => {
    const artistName = _artistName
      .replace("/", "%252F")
      .replace("?", "%253F")
      .replace("*", "%252A")
      .replace('"', "%27C");

    _setArtistName(artistName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(artistName);
  };

  return (
    <section className="bit-input full-center">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="form-input" className="form-label">
            Search an artist
          </label>
          <input
            type="text"
            name="query"
            id="form-input"
            className="form-input"
            value={artistName}
            onChange={event => setArtistName(event.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-btn">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default BandsInTownInput;
