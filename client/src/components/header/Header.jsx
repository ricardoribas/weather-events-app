import { Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav
} from 'react-bootstrap';

import Events from './../events';
import CreateEvent from './../create';
import Event from './../event';
import './Header.scss';

import React from 'react';

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Ogun recruitment test</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/events">Events</Link>
          <Link to="/events/create">Create a new event</Link>
        </Nav>
      </Navbar.Collapse>
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/create" component={CreateEvent} />
      <Route path="/events/detail" render={(props)=>{
        return (<Event event={props.location.event} />)
      } }/>
    </Navbar>
  );
}