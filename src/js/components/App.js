import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import StopPointsList from './StopPointsLi';
import ArrivalTime from './ArrivalTime';
import Form from './Form';

import { getStops, getArrivals, changeConfig, clearState } from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Form {...this.props} />
        <StopPointsList
          stops={this.props.stops}
          getArrivals={this.props.getArrivals}
        />
        <ArrivalTime {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    config: state.config,
    stops: state.stops,
    arrive: state.arrive,
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({ getStops, getArrivals, changeConfig, clearState }, dispatch);
}

App.propTypes = {
  getStops: PropTypes.func.isRequired,
  getArrivals: PropTypes.func.isRequired,
  arrive: PropTypes.arrayOf(PropTypes.object).isRequired,
  stops: PropTypes.shape({
    stopPointSequences: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default connect(mapStateToProps, mapActionsToProps)(App);
