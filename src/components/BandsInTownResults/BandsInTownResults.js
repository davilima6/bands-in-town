import React from "react";
import "./BandsInTownResults.css";

/**
 * BandsInTownResults component
 * @function BandsInTownResults
 * @returns {string} Markup of the component
 */
const BandsInTownResults = props => {
  return Object.keys(props.artist).length ? (
    <section className="bit-results">
      <div className="artist-image">
        <img src={props.artist.image_url} alt={props.artist.name} />
      </div>
      <h2 className="artist-name">{props.artist.name}</h2>
      <p className="artist-fb-page">
        {props.artist.facebook_page_url ? (
          <a href={props.artist.facebook_page_url} title="Visit artist's Facebook page">
            {props.artist.facebook_page_url}
          </a>
        ) : (
          <em>This artist does not have a registered Facebook page yet.</em>
        )}
      </p>
      <div className="artist-events">
        {props.artist.events && (
          <ul>
            {props.artist.events.map(event => (
              <li>
                <strong>When:</strong> <span>{event.datetime}</span>
                <br />
                <strong>Where:</strong>{" "}
                <span>
                  {event.venue.name}, {event.venue.city} ({event.venue.region}) -
                  {event.venue.country}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  ) : null;
};

export default BandsInTownResults;
