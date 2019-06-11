import { connect } from 'react-redux';
import {
	Form,
	Button
} from 'react-bootstrap';
import React, { Component } from "react";
import Calendar from 'react-calendar';

import { getEvents } from '../../redux/actions/events';

const mapDispatchToProps = dispatch => ({
	getEvents: params => dispatch(getEvents(params))
});

export class Filters extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			location: '',
			date: new Date()
		}
        
		this.onLocationChanged = this.onLocationChanged.bind(this);
        this.onDateChanged = this.onDateChanged.bind(this);
        this.searchEvents = this.searchEvents.bind(this);
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
    
    searchEvents(event) {
        event.preventDefault();
        this.props.getEvents(this.state);
    }

	render() {
		return (
			<Form onSubmit={this.executeAction}>
				<Form.Group>
					<Form.Label>Location</Form.Label>
					<Form.Control type="text" placeholder="event location"
						value={this.state.location} onChange={this.onLocationChanged} />
					<Form.Text className="text-muted">Where your event will take place?</Form.Text>
				</Form.Group>

				<Form.Group>
					<Form.Label>Date</Form.Label>
					<Calendar onChange={this.onDateChanged} value={new Date(this.state.date)} />
					<Form.Text className="text-muted">And when is going to happen?</Form.Text>
				</Form.Group>

				<Button variant="primary" type="submit"
                    onClick={this.searchEvents}>Search</Button>
			</Form>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Filters);
