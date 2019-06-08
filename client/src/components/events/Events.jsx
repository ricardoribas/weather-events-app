import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React from 'react';

const mapStateToProps = state => ({ events: state.events });

function getEvents(events = []) {
  return events
    .map((e, index) => (
      <tr key={index.toString()}>
        <td></td>
        <td>{e.title}</td>
        <td>{e.date}</td>
        <td><Button variant="primary">Edit</Button></td>
        <td><Button variant="danger">Delete</Button></td>
      </tr>
    ));
}

export const Events = ({ events }) => (
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
      {getEvents(events)}
    </tbody>
  </Table>
);

Events.propTypes = {
  events: PropTypes.arrayOf(Object).isRequired
};

export default connect(
  mapStateToProps
)(Events);
