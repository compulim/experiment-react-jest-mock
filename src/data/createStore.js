import { createStore as reduxCreateStore } from 'redux';

import reducer from './reducer';

export default function createStore() {
  return reduxCreateStore(reducer);
}
