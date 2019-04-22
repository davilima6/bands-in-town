import React from "react";
import "./BandsInTownResultsEvent.css";

/**
 * BandsInTownResultsEvent component
 * @function BandsInTownResultsEvent
 * @returns {string} Markup of the component
 */
const BandsInTownResultsEvent = props => {
  return (
    <li className="bit-results-event">
      <strong>When: </strong>
      <span>{props.event.date}</span>
      <br />
      <strong>Where: </strong>
      <span>
        {props.event.venue.name}, {props.event.venue.city} - {props.event.venue.country}
      </span>
    </li>
  );
};

export default BandsInTownResultsEvent;
