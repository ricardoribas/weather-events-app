import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
} from 'react-bootstrap';
import { Route } from "react-router-dom";
import './App.scss';

import React, { Component } from 'react';

import Navbar from '../header';
import Events from './../events';
import CreateEvent from './../create';
import Event from '../update';
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
          <div className="App__Container">
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/create" component={CreateEvent} />
            <Route path="/events/detail" render={(props)=>{
              return (<Event event={props.location.event} />)
            } }/>
            
          </div>
        </Router>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);