import {
	Form,
	Button
} from 'react-bootstrap';

import React, { Component } from "react";
import Calendar from 'react-calendar'

export class ChangeEvent extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			title: '',
			location: '',
			date: new Date()
		}
        
        this.executeAction = this.executeAction.bind(this);
		this.onTitleChanged = this.onTitleChanged.bind(this);
		this.onLocationChanged = this.onLocationChanged.bind(this);
		this.onDateChanged = this.onDateChanged.bind(this);
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

	render() {
		return (
			<Form onSubmit={this.executeAction}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="event title"
						value={this.state.title} onChange={this.onTitleChanged} />
					<Form.Text className="text-muted">Describe how cool is your event!</Form.Text>
				</Form.Group>

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

				<Button variant="primary" type="submit">
					Create/Update
				</Button>
			</Form>
		);
	}
}

export default ChangeEvent;
