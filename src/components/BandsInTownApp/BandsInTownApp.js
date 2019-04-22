import React, { useState } from "react";
import { BandsInTownForm, BandsInTownResults } from "../";
import "./BandsInTownApp.css";

const BASE_URL = "https://rest.bandsintown.com";
const APP_ID = "?app_id=bandcamp";

/**
 * Get artist information from API
 * @method getArtist
 * @param {string} artistName
 * @returns {Promise} Promise that resolves to artist object or rejects with error
 */
async function getArtist(artistName) {
  try {
    const url = `${BASE_URL}/artists/${artistName}${APP_ID}`;
    const response = await fetch(url, { mode: "cors" });

    if (response.ok) {
      return await response.json();
    }
    console.error(response);
    throw new Error({ error: response.error });
  } catch (response) {
    console.error(response);
    throw new Error({ error: response.error });
  }
}

/**
 * Main component: BandsInTownApp
 * @function BandsInTownApp
 * @returns {string} Markup of the component
 */
const BandsInTownApp = () => {
  const [artist, setArtist] = useState({});
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [hasError, setHasError] = useState(false);

  /**
   * Handle form submission: fetch artist info from API and update main component state
   * @method getRecipes
   * @param {string} artistName
   * @returns {undefined}
   */
  async function handleSubmit(artistName) {
    let artist = {};

    try {
      setHasError(false);
      artist = await getArtist(artistName);
    } catch (error) {
      setHasError(true);
    }

    setIsFirstSearch(false);
    setArtist(artist);
  }

  return (
    <div className="bit-app">
      <header className="bit-app-header full-center">
        <h1>Bands In Town</h1>
      </header>
      <div className="bit-app-wrapper full-center">
        {!isFirstSearch && <BandsInTownResults artist={artist} hasError={hasError} />}
        <BandsInTownForm setArtist={setArtist} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default BandsInTownApp;
