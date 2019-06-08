// import { getSimpleDate } from './../../formatters';
import { GET_EVENTS } from './../constants';

export const DEFAULT_CONFIG = {
  location: undefined,
  date: Date.now()
};

const currentState = {
  events: [],
  query: DEFAULT_CONFIG
};

export default (state = currentState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return Object.assign({}, state, {
        events: action.payload
      });
    default:
      return state;
  }
};
