import {combineReducers} from 'redux'

import beer from './beerReducer'
import user from './userReducer'

export default combineReducers({
  user,
  beer
})
