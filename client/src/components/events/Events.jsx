import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table
} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

import { createEvent } from './../../redux/actions/events';

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => ({
  createEvent: params => dispatch(createEvent(params)),
});

function getEvents(events = []) {
  return events
    .map((e, index) => (
      <tr key={index.toString()}>
        <td></td>
        <td>{e.title}</td>
        <td>{e.location}</td>
        <td>{e.date}</td>
        <td><Link to={{ pathname: '/events/detail', event: e }}>View</Link></td>
      </tr>
    ));
}

class Events extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getEvents(this.props.events)}
        </tbody>
      </Table>
    );
  }
}

Events.propTypes = {
  events: PropTypes.arrayOf(Object).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
