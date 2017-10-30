import React from 'react';
import PropTypes from 'prop-types';

const StopPointsList = (props) => {
  const renderList = (elem) => {
    return (
      <li
        className="stop-item"
        key={elem.id}
        onClick={() => { props.getArrivals(elem.id); }}
      >
        {elem.name}
      </li>
    );
  };
  if (!props.stops.lineId) { return null; }
  return (
    <ul className="stops-list">
      {props.stops.isFetching ? <div className="preloader"></div> :
        props.stops.stopPointSequences[0].stopPoint.map(elem => renderList(elem))}
    </ul>
  );
};

StopPointsList.propTypes = {
  isFetching: PropTypes.string,
  getArrivals: PropTypes.func.isRequired,
  stops: PropTypes.shape({
    stopPointSequences: PropTypes.arrayOf(PropTypes.object),
    lineId: PropTypes.string,
  }).isRequired,
};
export default StopPointsList;
