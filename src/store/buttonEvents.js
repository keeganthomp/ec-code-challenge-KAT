

export const MOVE_CONCERT_UP = "MOVE_CONCERT_UP";
export const MOVE_CONCERT_DOWN = "MOVE_CONCERT_DOWN";


export function moveConcertUp(index) {
  return {
    type: MOVE_CONCERT_UP,
    payload: index
  };
}

export function moveConcertDown(concert) {
  return {
    type: MOVE_CONCERT_DOWN,
    payload: concert
  };
}


// button Reducer
export default (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case MOVE_CONCERT_UP:
      let index = action.payload;
      ;
      return newState;
    default:
      return newState;
  }
};