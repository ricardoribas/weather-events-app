import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Calendar from 'react-calendar'
import React from 'react';

import { deleteEvent, updateEvent } from './../../redux/actions/events';
import { throws } from 'assert';

const mapDispatchToProps = dispatch => ({
  deleteEvent: params => dispatch(deleteEvent(params)),
  updateEvent: params => dispatch(updateEvent(params))
});

class Event extends React.Component {
  constructor(props) {
    super(props);
  
    const { event } = this.props;

    this.state = event;
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    
    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    this.onUpdateEvent = this.onUpdateEvent.bind(this);
  }

  onTitleChanged(event) {
    const state = this.state;

    this.setState(Object.assign({}, state, {
      title: event.target.value
    }));
  }

  onDateChanged(newDate) {
    const state = this.state;

    this.setState(Object.assign({}, state, {
      date: newDate
    }));
  }

  onDeleteEvent() {
    this.props.deleteEvent(this.state._id);
  }

  onUpdateEvent() {
    this.props.updateEvent(this.state);
  }

  render() {
    return (
      <div>
        <Form.Control type="text" placeholder="Event title" value={this.state.title} onChange={this.onTitleChanged} />
        <Calendar onChange={this.onDateChanged} value={new Date(this.state.date)} />

        <Button variant="success" onClick={this.onUpdateEvent}>Update</Button>
        <Button variant="danger" onClick={this.onDeleteEvent}>Delete</Button>
      </div>
    )
  }
};

Event.propTypes = {
  event: PropTypes.instanceOf(Object).isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Event);