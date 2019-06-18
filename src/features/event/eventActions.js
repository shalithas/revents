import { CREATE_EVENTS, UPDATE_EVENTS, DELETE_EVENTS } from "./eventsConsts";

export const createEvent = event => {
  return {
    type: CREATE_EVENTS,
    payload: {
      event: event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENTS,
    payload: {
      event: event
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENTS,
    payload: {
      event: eventId
    }
  };
};
