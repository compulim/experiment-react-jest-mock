import { CLICK } from './actions/click';

const DEFAULT_STATE = {
  numClick: 0
};

export default function reducer(state = DEFAULT_STATE, action) {
  if (action.type === CLICK) {
    state = { ...state, numClick: state.numClick + 1 };
  }

  return state;
}
