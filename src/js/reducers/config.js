import { CHANGE_CONFIG } from '../constants';

export const config = { line: '3', direction: 'inbound' };

export function ConfigReducer(state = config, action) {
  switch (action.type) {
    case CHANGE_CONFIG: {
      return { ...state, direction: action.payload };
    }
    default:
      return state;
  }
}
