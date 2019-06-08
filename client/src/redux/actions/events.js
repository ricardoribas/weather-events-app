import { DEFAULT_CONFIG } from '../reducers';
import { GET_EVENTS } from '../constants';

const getParams = (query) => Object.keys(query).map(k => `${k}=${params[k]}`).join('&');

export const getItineraries = (params = DEFAULT_CONFIG) => dispatch =>
  fetch(`http://localhost:4000/api/events?${getParams(params.query)}`)
    .then(response => response.json())
    .then(results => (dispatch({
      type: GET_EVENTS,
      payload: results
    })))
    .catch((err) => {
      throw err;
    });
