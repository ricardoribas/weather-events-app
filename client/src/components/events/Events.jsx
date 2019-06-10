import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Card,
	Row,
	Col
} from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

import './Events.scss';
import { createEvent } from './../../redux/actions/events';

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => ({
	createEvent: params => dispatch(createEvent(params)),
});

function getEvents(events = []) {
	return events
		.map((e, index) => (
			<Card key={index.toString()} className="Events__Card">
				<Card.Body>
					<Card.Title>{e.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{e.date}</Card.Subtitle>
					<Card.Text>
						@{e.location}
					</Card.Text>
					<Link to={{ pathname: '/events/detail', event: e }}>Edit event</Link>
				</Card.Body>
			</Card>
		));
}

class Events extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col><h1>Ogun Events</h1></Col>
				</Row>
				<Row>
					{getEvents(this.props.events)}
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
