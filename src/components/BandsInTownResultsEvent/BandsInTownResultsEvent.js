import React from "react";
import PropTypes from 'prop-types';
import "./BandsInTownResultsEvent.css";

/**
 * BandsInTownResultsEvent component
 * @function BandsInTownResultsEvent
 * @param {Object} props - Component properties
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

/**
 * Property types
 * @property {Object} propTypes Property types
 * @static
 */
BandsInTownResultsEvent.propTypes = {
  event: PropTypes.object.isRequired
};

export default BandsInTownResultsEvent;
