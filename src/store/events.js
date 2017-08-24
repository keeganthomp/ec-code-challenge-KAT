
// ------------------------------------
// Constants
// ------------------------------------
export const SET_EVENTS = 'SET_EVENTS'
export const SET_ARTIST = 'SET_ARTIST'

// ------------------------------------
// Actions
// ------------------------------------
export function setEvents (events) {
  return {
    type    : SET_EVENTS,
    payload : events
  }
}

export function setArtist (artist) {
  return {
    type    : SET_ARTIST,
    payload : artist
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_EVENTS]    : (state, action) => Object.assign({}, state, { events: action.payload }),
  [SET_ARTIST] : (state, action) => Object.assign({}, state, { artist: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  events: [],
  artist: null
}
export default function eventsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
