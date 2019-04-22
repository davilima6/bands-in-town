import React, { useState } from "react";
import { ArtistInfo, ArtistEvent } from "../../models/";
import { BandsInTownForm, BandsInTownResults } from "../";
import "./BandsInTownApp.css";

const BASE_URL = "https://rest.bandsintown.com";
const APP_ID = "?app_id=foo";

/**
 * Get information from API
 * @method fetchAPI
 * @param {string} artistName
 * @returns {Promise} Promise that resolves to artist object or rejects with error
 */
async function getFromApi(artistName, getEvents = false) {
  try {
    const url = `${BASE_URL}/artists/${artistName}${getEvents ? '/events' : ''}${APP_ID}`;
    const response = await fetch(url, { mode: "cors" });

    if (response.ok) {
      return response.json();
    }

    console.error(response);
    throw new Error({ error: response.error });
  } catch (response) {
    console.error(response);
    throw new Error({ error: response.error });
  }
}

/**
 * Get artist information from API
 * @method getArtist
 * @param {string} artistName
 * @returns {Promise} Promise that resolves to ArtistInfo object or rejects with error
 */
async function getArtistInfo(artistName) {
  let artistInfo = await getFromApi(artistName);

  artistInfo = new ArtistInfo(artistInfo);

  return artistInfo;
}

/**
 * Get artist events information from API
 * @method getArtistEvents
 * @param {string} artistName
 * @returns {Promise} Promise that resolves to ArtistEvent array or rejects with error
 */
async function getArtistEvents(artistName) {
  let artistEvents = await getFromApi(artistName, true);

  artistEvents = artistEvents.map(el => new ArtistEvent(el));

  return artistEvents;
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
      artist = await getArtistInfo(artistName);
      artist.events = await getArtistEvents(artistName);
    } catch (error) {
      setHasError(true);
    }

    if (isFirstSearch) {
      setIsFirstSearch(false);
    };

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
