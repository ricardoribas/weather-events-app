import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Container className="App">
        <Row>
          <Col xs={6}>Header with search options</Col>
        </Row>
        <Row>
          <Col>
            <Events />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);