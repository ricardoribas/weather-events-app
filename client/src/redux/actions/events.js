import { DEFAULT_CONFIG } from '../reducers';
import { GET_EVENTS } from '../constants';

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
