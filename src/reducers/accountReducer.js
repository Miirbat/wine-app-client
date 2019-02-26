export default function accountReducer(state = { current: {} }, action) {
  switch(action.type) {
  case 'SET_ACCOUNT':
    return { ...state, current: action.payload.data };
  default: return state;
  }
}
