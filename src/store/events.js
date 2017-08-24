import _ from "lodash";
// ------------------------------------
// Constants
// ------------------------------------
export const SET_EVENTS = "SET_EVENTS";
export const SET_ARTIST = "SET_ARTIST";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const MOVE_EVENT_DOWN = "MOVE_EVENT_DOWN";
export const MOVE_EVENT_UP = "MOVE_EVENT_UP";
export const SORT_BY_VENUE = "SORT_BY_VENUE";
export const LOADING_DATA = "LOADING_DATA";
export const DONE_LOADING = "DONE_LOADING";

// ------------------------------------
// Actions
// ------------------------------------
export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: events
  };
}

export function setArtist(artist) {
  return {
    type: SET_ARTIST,
    payload: artist
  };
}

export function moveEventUp(index) {
  return {
    type: MOVE_EVENT_UP,
    payload: index
  };
}

export function moveEventDown(index) {
  return {
    type: MOVE_EVENT_DOWN,
    payload: index
  };
}

export function removeEvent(index) {
  return {
    type: REMOVE_EVENT,
    payload: index
  };
}

export function sortByVenue() {
  return {
    type: SORT_BY_VENUE
  };
}

export function loadingData() {
  return {
    type: LOADING_DATA
  };
}

export function doneLoading() {
  return {
    type: DONE_LOADING
  };
}



// ------------------------------------
// Action Handlers
// ------------------------------------
// const ACTION_HANDLERS = {
//   [SET_EVENTS]: (state, action) =>
//     Object.assign({}, state, { events: action.payload }),
//   [SET_ARTIST]: (state, action) =>
//     Object.assign({}, state, { artist: action.payload }),
//   [REMOVE_EVENT]: (state, action) =>
//     Object.assign({}, state, { events: state.events.splice(2, 1) })
// };

const initialState = {
  events: [],
  artist: null,
  isLoading: false
};

const ACTION_HANDLERS = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case SET_EVENTS:
      newState.events = action.payload;
      return newState;
    case SET_ARTIST:
      newState.artist = action.payload;
      return newState;
    case REMOVE_EVENT:
      let index = action.payload;
      newState.events.splice(index, 1);
      return newState;
    case MOVE_EVENT_UP:
      console.log("SDFSDF");
      if (action.payload === 0) {
        alert(
          newState.events[action.payload].lineup[0] +
            " at " +
            newState.events[action.payload].venue.name +
            " is the first item."
        );
        return;
      }
      let up = newState.events[action.payload];
      newState.events[action.payload] = newState.events[action.payload - 1];
      newState.events[action.payload - 1] = up;
      return newState;
    case MOVE_EVENT_DOWN:
      console.log("SDFSDF");
      if (action.payload === newState.events.length) {
        alert(
          newState.events[action.payload].lineup[0] +
            " at " +
            newState.events[action.payload].venue.name +
            " is the last item."
        );
        return;
      }
      let down = newState.events[action.payload];
      newState.events[action.payload] = newState.events[action.payload + 1];
      newState.events[action.payload + 1] = down;
      return newState;
    case SORT_BY_VENUE:
      function compare(a, b) {
        if (a.venue.name < b.venue.name) return -1;
        if (a.venue.name > b.venue.name) return 1;
      }
      newState.events.sort(compare);
      return newState;
    case LOADING_DATA:
      newState.isLoading = true;
      return newState;
    case DONE_LOADING:
      newState.isLoading = false;
      return newState;
    default:
      return state;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------

export default function eventsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS;

  return handler ? handler(state, action) : state;
}
