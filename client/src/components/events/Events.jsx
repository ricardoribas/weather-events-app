import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Card,
	Row,
	Col,
	Button
} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

import './Events.scss';
import { deleteEvent, createEvent } from '../../redux/actions/events';

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => ({
	createEvent: params => dispatch(createEvent(params)),
	deleteEvent: params => dispatch(deleteEvent(params)),
});

function getLocation($event) {
	if ($event.location) {
		return (
			`@{$event.location}`
		);
	}

	return 'No location info provided';
}

function getWeatherConditions($event) {
	if ($event.weather.summary === 'Unknown') {
		return $event.weather.summary;
	}

	const { summary, temperature } = $event.weather;

	return `${temperature}C - ${summary}`;
}

function getEvents(events = []) {
	if (events.length) {
		return events
			.map((e, index) => (
				<Card key={index.toString()} className="Events__Card">
					<Card.Body>
						<Card.Title>{e.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{e.date}</Card.Subtitle>
						<Card.Text>
							{getLocation(e)}<br />
							Weather conditions: {getWeatherConditions(e)}
						</Card.Text>
						<Link to={{ pathname: '/events/detail', event: e }}>Edit event</Link>
					</Card.Body>
					<Card.Footer>
						<Button variant="danger" onClick={this.onDeleteEvent.bind(null, e._id)}>Delete event</Button>
					</Card.Footer>
				</Card>
			));
	} else {
		return (
			<Col><h2>No events to show</h2></Col>
		);
	}
}

class Events extends React.Component {

	constructor(props) {
		super(props);

		this.onDeleteEvent = this.onDeleteEvent.bind(this);
	}

	onDeleteEvent(id) {
		this.props.deleteEvent(id);
	}

	render() {
		return (
			<div>
				<Row>
					<Col><h1>Ogun Events</h1></Col>
				</Row>
				<Row>
					{getEvents.call(this, this.props.events)}
				</Row>
			</div>
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
