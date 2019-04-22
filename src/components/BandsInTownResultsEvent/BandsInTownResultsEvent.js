import React from "react";
import "./BandsInTownResultsEvent.css";

/**
 * Helper - Date formatter
 * @function humanizeDate
 * @param {string} date Date in ISO format
 * @returns {string} Humanized formatted date
 */
function humanizeDate(date) {
  const humanizedDate = new Date(date).toDateString();

  return humanizedDate;
}

/**
 * BandsInTownResultsEvent component
 * @function BandsInTownResultsEvent
 * @returns {string} Markup of the component
 */
const BandsInTownResultsEvent = props => {
  const humanizedDate = humanizeDate(props.event.datetime);

  return (
    <li className="bit-results-event">
      <strong>When: </strong>
      <span>{humanizedDate}</span>
      <br />
      <strong>Where: </strong>
      <span>
        {props.event.venue.name}, {props.event.venue.city} - {props.event.venue.country}
      </span>
    </li>
  );
};

export default BandsInTownResultsEvent;
