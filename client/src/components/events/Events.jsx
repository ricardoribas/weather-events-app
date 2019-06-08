import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Table,
  Form
} from 'react-bootstrap';
import Calendar from 'react-calendar'
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

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      date: new Date()
    }
    
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
  }

  onCreateEvent() {
    this.props.createEvent(this.state);
  }

  onTitleChanged(event) {
    const state = this.state;

    this.setState(Object.assign({}, state, {
      title: event.target.value
    }));
  }

  onLocationChanged(event) {
    const state = this.state;

    this.setState(Object.assign({}, state, {
      location: event.target.value
    }));
  }

  onDateChanged(newDate) {
    const state = this.state;

    this.setState(Object.assign({}, state, {
      date: newDate
    }));
  }

  render(events) {
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
          <tr>
            <td></td>
            <td><Form.Control type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChanged} /></td>
          </tr>
          <tr>
            <td></td>
            <td><Form.Control type="text" placeholder="Location" value={this.state.location} onChange={this.onLocationChanged} /></td>
          </tr>
          <tr>
            <td></td>
            <td><Calendar onChange={this.onDateChanged} value={new Date(this.state.date)} /></td>
          </tr>
          <tr>
            <td></td>
            <td><Button variant="success" onClick={this.onCreateEvent}>Create</Button></td>
          </tr>
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
