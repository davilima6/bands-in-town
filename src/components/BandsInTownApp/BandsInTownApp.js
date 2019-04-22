import React, { useState } from "react";
import { BandsInTownInput, BandsInTownResults } from "../";
import "./BandsInTownApp.css";

const BASE_URL = "https://rest.bandsintown.com";
const APP_ID = "?app_id=bandcamp";

/**
 * Get artist information from API
 * @method getArtist
 * @returns {Promise} Promise that resolves to artist object or rejects with error
 */
const getArtist = async artistName => {
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
};

/**
 * Handle form submission
 * @method getRecipes
 * @returns {undefined}
 */
async function handleSubmit(artistName) {
  const artist = await getArtist(artistName);

  this.setArtist(artist);
};

/**
 * Main BandsInTown component
 * @function BandsInTownApp
 * @returns {string} Markup of the component
 */
const BandsInTownApp = () => {
  const [artist, setArtist] = useState({});

  return (
    <div className="bit-app">
      <header className="bit-app-header full-center">
        <h1>Bands In Town</h1>
      </header>
      <div className="bit-app-wrapper full-center">
        <BandsInTownResults artist={artist} />
        <BandsInTownInput setArtist={setArtist} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default BandsInTownApp;
