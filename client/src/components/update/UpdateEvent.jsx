import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChangeEvent from './../commons/ChangeEvent';
import { updateEvent } from '../../redux/actions/events';

const mapDispatchToProps = dispatch => ({
  updateEvent: params => dispatch(updateEvent(params))
});

class Event extends ChangeEvent {
  constructor(props) {
    super(props);
  
    const { event } = this.props;

    this.state = event;
    
    this.onDeleteEvent = this.onDeleteEvent.bind(this);
  }

  executeAction() {
    this.props.updateEvent(this.state);
  }
};

Event.propTypes = {
  event: PropTypes.instanceOf(Object).isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(Event);