import { DEFAULT_CONFIG } from '../reducers';
import { GET_EVENTS, EVENT_DELETED, EVENT_UPDATED, EVENT_CREATED } from '../constants';

const getParams = (query) => Object.keys(query).map(k => `${k}=${query[k]}`).join('&');

export const getEvents = (params = DEFAULT_CONFIG) => dispatch =>
  fetch(`http://localhost:4000/api/events?${getParams(params)}`)
    .then(response => response.json())
    .then(results => {
      return (dispatch({
        type: GET_EVENTS,
        payload: results
      }));
    })
    .catch((err) => {
      throw err;
    });

export const createEvent = (event) => dispatch => fetch(`http://localhost:4000/api/events/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  })
  .then(response => response.json())
  .then(result => {
    return (dispatch({
      type: EVENT_CREATED,
      payload: result
    }));
  })
  .catch((err) => {
    throw err;
  });

export const updateEvent = (event) => dispatch => fetch(`http://localhost:4000/api/events/${event._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(result => {
      return (dispatch({
        type: EVENT_UPDATED,
        payload: result
      }));
    })
    .catch((err) => {
      throw err;
    });

export const deleteEvent = (eventId) => dispatch => fetch(`http://localhost:4000/api/events/${eventId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(ok => {
      return (dispatch({
        type: EVENT_DELETED,
        payload: {
          id: eventId
        }
      }));
    })
    .catch((err) => {
      throw err;
    });