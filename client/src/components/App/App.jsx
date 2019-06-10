import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
} from 'react-bootstrap';
import './App.scss';

import React, { Component } from 'react';

import Navbar from '../header';
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
      <Container className="App">
        <Router>
          <Navbar />
        </Router>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);