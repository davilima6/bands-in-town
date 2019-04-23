import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./BandsInTownForm.css";

/**
 * @typedef {object} MouseEvent
 */

 /**
 * BandsInTownForm component
 * @function BandsInTownForm
 * @param {Object} props - Component properties
 * @returns {string} Markup of the component
 */
const BandsInTownForm = props => {
  const [artistName, _setArtistName] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  /**
   * Sanitize user input and persist in component's local state
   * @method setArtistName
   * @param {string} artistName
   * @returns {undefined}
   */
  async function setArtistName(artistName) {
    const artistNameSanitized = artistName
      .replace("/", "%252F")
      .replace("?", "%253F")
      .replace("*", "%252A")
      .replace('"', "%27C");

    _setArtistName(artistNameSanitized);
  }

  /**
   * Sanitize user input and persist in component's local state
   * @method onSubmit
   * @param {MouseEvent} artistName
   * @returns {undefined}
   */
  async function onSubmit(event) {
    event.preventDefault();
    setArtistName("");
    setIsEnabled(false);
    try {
      await props.onSubmit(artistName);
    } finally {
      setIsEnabled(true);
    }
  }

  return (
    <section className="bit-input full-center">
      <form onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="form-input" className="form-label">
            Search an artist
          </label>
          <input
            type="text"
            name="query"
            id="form-input"
            className="form-input"
            autoComplete="off"
            disabled={!isEnabled}
            value={artistName}
            onChange={event => setArtistName(event.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-btn" disabled={!isEnabled}>
            {isEnabled ? "Search" : "Searching..."}
          </button>
        </div>
      </form>
    </section>
  );
};

/**
 * Property types
 * @property {Object} propTypes Property types
 * @static
 */
BandsInTownForm.propTypes = {
  setArtist: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default BandsInTownForm;
