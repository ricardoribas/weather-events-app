import { DEFAULT_CONFIG } from '../reducers';
import { GET_EVENTS, EVENT_DELETED, EVENT_UPDATED, EVENT_CREATED } from '../constants';

import { executeRequest } from './../../api';

export const getEvents = (params = DEFAULT_CONFIG) => dispatch =>
  executeRequest(
    'GET',
    '',
    params
  )
  .then(results => {
    return (dispatch({
      type: GET_EVENTS,
      payload: results
    }));
  })
    

export const createEvent = (event) => dispatch => 
  executeRequest(
    'POST',
    '',
    undefined,
    JSON.stringify(event)
  ).then(result => {
      return (dispatch({
        type: EVENT_CREATED,
        payload: result
      }));
    })
    .catch((err) => {
      throw err;
    });

export const updateEvent = (event) => dispatch => 
  executeRequest(
    'PUT',
    event._id,
    undefined,
    JSON.stringify(event)
  ).then(result => {
      return (dispatch({
        type: EVENT_UPDATED,
        payload: result
      }));
    })
    .catch((err) => {
      throw err;
    });

export const deleteEvent = (eventId) => dispatch =>
    executeRequest(
      'DELETE',
      eventId,
      undefined
    ).then(ok => {
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