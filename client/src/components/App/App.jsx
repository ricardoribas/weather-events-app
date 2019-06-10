import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';
import './App.scss';

import React, { Component } from 'react';

import Events from '../events';
import Event from '../event';
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
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ogun recruitment test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/events">Events</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/events" component={Events} />
          <Route path="/events/detail" render={(props)=>{
            return (<Event event={props.location.event} />)
          } }/>
        </Router>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);