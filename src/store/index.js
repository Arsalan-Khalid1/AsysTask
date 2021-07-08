import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { indexReducer } from './reducers/covid/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    covidData: indexReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
)

export { store }
