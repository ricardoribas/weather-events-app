import { connect } from "react-redux";
import "./CreateEvent.scss";

import { createEvent } from './../../redux/actions/events';
import ChangeEvent from './../commons/ChangeEvent';

const mapDispatchToProps = dispatch => ({
	createEvent: params => dispatch(createEvent(params)),
});

export class CreateEvent extends ChangeEvent {
	executeAction(event) {
		event.preventDefault();
		this.props.createEvent(this.state);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(CreateEvent);
