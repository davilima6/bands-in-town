import React, { useState } from "react";
import PropTypes from "prop-types";
import { StorageService } from "../../services";
import { strFormat, strSanitize } from "../../utils";
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
  const artistNameCached = StorageService.get("artist");
  const [artistName, setArtistName] = useState(artistNameCached || "");
  const [isEnabled, setIsEnabled] = useState(true);

  /**
   * Handle form submission by sanitizing user input and persisting it in both local component state and browser storage
   * @function onSubmit
   * @param {MouseEvent} artistName
   * @returns {undefined}
   */
  async function onSubmit(event) {
    event.preventDefault();

    setIsEnabled(false);

    const sanitizedArtistName = strSanitize(artistName);

    setArtistName(sanitizedArtistName);

    StorageService.set("artist", artistName);

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
            value={strFormat(artistName)}
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
