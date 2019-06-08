import { connect } from 'react-redux';
import React, { Component } from 'react';

import Events from '../events';

import { getEvents } from '../../redux/actions/events';

const mapDispatchToProps = dispatch => ({
  getEvents: params => dispatch(getEvents(params))
});

export class App extends Component {
  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    return (
      <div className="App">
        <Events />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);