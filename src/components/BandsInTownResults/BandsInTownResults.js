import React from "react";
import { BandsInTownResultsEvent } from "../";
import "./BandsInTownResults.css";

/**
 * BandsInTownResults component
 * @function BandsInTownResults
 * @returns {string} Markup of the component
 */
const BandsInTownResults = props => {
  if (props.hasError) {
    return (
      <section className="bit-results">
        <p>There was an error retrieving the artist information.</p>
        <p>Please try again.</p>
      </section>
    );
  }

  return Object.keys(props.artist).length ? (
    <section className="bit-results">
      <div className="bit-artist-image">
        <img src={props.artist.image_url} alt={props.artist.name} />
      </div>
      <h2 className="bit-artist-name">{props.artist.name}</h2>
      <p className="bit-artist-fb-page">
        {props.artist.facebook_page_url ? (
          <a
            href={props.artist.facebook_page_url}
            className="bit-link"
            title="Visit artist's Facebook page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Facebook Fanpage
          </a>
        ) : (
          <em>This artist does not have a registered Facebook page yet.</em>
        )}
      </p>
      {props.artist.events && (
        <div className="bit-events">
          <h3 className="bit-events-header">Upcoming Events</h3>
          <ul>
            {props.artist.events.map(event => (
              <BandsInTownResultsEvent event={event} key={event.id} />
            ))}
          </ul>
        </div>
      )}
    </section>
  ) : (
    <section className="bit-results">
      <p>There's no information registered for this artist yet.</p>
    </section>
  );
};

export default BandsInTownResults;
