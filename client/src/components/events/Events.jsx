import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({ events: state.events });

function getEvents(events = []) {
  return events
    .map((i, index) => (
      <div key={index.toString()}>{i.title}</div>
    ));
}

export const Events = ({ events }) => (
  <div>
    {getEvents(events)}
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(Object).isRequired
};

export default connect(
  mapStateToProps
)(Events);
