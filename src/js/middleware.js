import { GET_ARRIVALS, GET_STOPS, ADD_ARRIVALS, ADD_STOPS } from './constants';

const API_URL = 'https://api.tfl.gov.uk';

const makeRequest = (URL) => {
  return fetch(URL)
    .then(res => res.json())
    .catch((error) => {
      throw new Error(error);
    });
};

export default function request(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case GET_STOPS: {
          const URL = `${API_URL}/line/${action.payload}/Route/Sequence/${action.direction}`;
          makeRequest(URL)
            .then((body) => {
              store.dispatch({
                type: ADD_STOPS,
                payload: body,
              });
            });
          break;
        }
        case GET_ARRIVALS: {
          const URL = `${API_URL}/StopPoint/${action.payload}/arrivals`;
          makeRequest(URL)
            .then((body) => {
              store.dispatch({
                type: ADD_ARRIVALS,
                payload: body,
              });
            });
          break;
        }
      }
      return next(action);
    };
  };
}
