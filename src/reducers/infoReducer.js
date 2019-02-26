export default function infoReducer(state = { info: {} }, action){
  switch(action.type) {
  case 'SET_INFO':
    return {...state, info: action.payload.account };
  default: return state;
  }
}
