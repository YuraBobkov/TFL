export function getStops(number, yep) {
  return {
    type: 'GET_STOPS',
    payload: number,
    direction: yep,
  };
}

export function getArrivals(data) {
  return {
    type: 'GET_ARRIVALS',
    payload: data,
  };
}
export function changeConfig(data) {
  return {
    type: 'CHANGE_CONFIG',
    payload: data,
  };
}
export function clearState() {
  return {
    type: 'CLEAR_STATE',
  };
}
