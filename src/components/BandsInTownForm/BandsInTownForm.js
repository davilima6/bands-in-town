import React, { useState } from "react";
import "./BandsInTownForm.css";

/**
 * BandsInTownForm component
 * @function BandsInTownForm
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
   * @method setArtistName
   * @param {string} artistName
   * @returns {undefined}
   */
  async function handleSubmit(event) {
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
            autoComplete="off"
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

export default BandsInTownForm;
