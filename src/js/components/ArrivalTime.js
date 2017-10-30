import React from 'react';
import PropTypes from 'prop-types';

const ArrivalTime = (props) => {
  if (!props.arrive.length || props.stops.isFetching) { return null; }
  const renderList = (elem) => {
    return (
      <li key={elem.id} className="arrive-item">
        <span className="arrive-name">{elem.lineName}</span >
        <span className="arrive-time">~{Math.round(elem.timeToStation / 60)} min</span>
      </li>
    );
  };
  return (
    <div>
      <h3>{props.arrive[0].stationName}</h3>
      <ul className="arrive-list">
        <li className="arrive-item-title">
          <span className="arrive-title">
            Bus Number
          </span>
          <span className="arrive-title">
            Time to station
          </span>
        </li>
        {props.arrive.map((elem) => renderList(elem))}
      </ul>
    </div>
  );
};

ArrivalTime.propTypes = {
  arrive: PropTypes.array.isRequired,
};

export default ArrivalTime;
