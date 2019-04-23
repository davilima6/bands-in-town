import React, { useState } from "react";
import PropTypes from "prop-types";
import { StorageService } from "../../services";
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
   * Sanitize user input and persist in component's local state
   * @function setArtistName
   * @param {string} artistName
   * @returns {undefined}
   */
  function sanitizeArtistName(artistName) {
    const artistNameSanitized = artistName
      .replace("/", "%252F")
      .replace("?", "%253F")
      .replace("*", "%252A")
      .replace('"', "%27C");

    return artistNameSanitized;
  }

  /**
   * Sanitize user input and persist in component's local state
   * @function onSubmit
   * @param {MouseEvent} artistName
   * @returns {undefined}
   */
  async function onSubmit(event) {
    event.preventDefault();
    setIsEnabled(false);

    const sanitizedArtistName = sanitizeArtistName(artistName)

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
