import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container
} from 'react-bootstrap';

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
          <div>
            <ul>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
            <Route exact path="/events" component={Events} />
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