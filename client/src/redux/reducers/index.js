// import { getSimpleDate } from './../../formatters';
import { GET_EVENTS, EVENT_DELETED, EVENT_UPDATED } from './../constants';

export const DEFAULT_CONFIG = {
  location: undefined,
  date: Date.now()
};

const currentState = {
  events: [],
  query: DEFAULT_CONFIG
};

const getEventIndex = (events, id) => events.findIndex(e => e._id === id);

export default (state = currentState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return Object.assign({}, state, {
        events: action.payload
      });
    case EVENT_DELETED: 
      return Object.assign({}, state, {
        events: state.events.splice(getEventIndex(state.events, action.payload.id), 1)
      });
    case EVENT_UPDATED:
      state.events[getEventIndex(state.events, saction.payload._id)] = action.payload;

      return state;
    default:
      return state;
  }
};
