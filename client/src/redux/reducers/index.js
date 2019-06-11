import { GET_EVENTS, EVENT_DELETED, EVENT_UPDATED, EVENT_CREATED } from './../constants';

export const DEFAULT_CONFIG = {};

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
    case EVENT_CREATED:
      state.events.push(action.payload);

      return state;
    case EVENT_DELETED: 
      state.events.splice(getEventIndex(state.events, action.payload.id), 1)

      return state;
    case EVENT_UPDATED:
      state.events[getEventIndex(state.events, action.payload._id)] = action.payload;

      return state;
    default:
      return state;
  }
};
