import { combineReducers, createStore } from 'redux'

import prismicReducer from './reducers/prismic_reducer'
import authenticationReducer from './reducers/authentication_reducer'

const allReducers = combineReducers({
  prismic: prismicReducer,
  authentication: authenticationReducer
})

const reduxStore = createStore(allReducers);

export default reduxStore;
