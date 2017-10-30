import { ADD_STOPS, GET_STOPS } from '../constants';

export default function stopsReducer(state = {}, action) {
  switch (action.type) {
    case GET_STOPS: {
      return { ...state,
        isFetching: true };
    }
    case ADD_STOPS: {
      return { ...action.payload,
        isFetching: false };
    }
    default:
      return state;
  }
}
