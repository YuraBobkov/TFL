import { ADD_ARRIVALS } from '../constants';

const makeDB = (data) => {
  const dataBase = [];
  data.forEach((item) => {
    const busArrival = {};
    busArrival.id = item.id;
    busArrival.lineName = item.lineName;
    busArrival.stationName = item.stationName;
    busArrival.timeToStation = item.timeToStation;
    dataBase.push(busArrival);
  });
  return dataBase.sort((a, b) => a.timeToStation - b.timeToStation);
};
export default function ArrivalsReducer(state = [], action) {
  switch (action.type) {
    case ADD_ARRIVALS: {
      return makeDB(action.payload);
    }
    case 'CLEAR_STATE': {
      return [];
    }
    default:
      return state;
  }
}
