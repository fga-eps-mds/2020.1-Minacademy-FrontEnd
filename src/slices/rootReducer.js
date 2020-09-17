import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import tutorialReducer from './tutorialSlice'
import userReducer from './usersSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'tutorial']
}

const rootReducer = combineReducers({
  user: userReducer,
  tutorial: tutorialReducer
})

export default persistReducer(persistConfig, rootReducer)