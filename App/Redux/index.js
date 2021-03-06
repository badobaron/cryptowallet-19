import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {

  const rootReducer = combineReducers({
    prices: require('./PricesRedux').reducer,
    settings: require('./SettingRedux').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
