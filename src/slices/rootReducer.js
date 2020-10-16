import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import tutorialReducer from './tutorialSlice'
import userReducer from './usersSlice'
import mentorshipReducer from './mentorshipSlice'

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'tutorial', 'mentorship']
}

const rootReducer = combineReducers({
  user: userReducer,
  tutorial: tutorialReducer,
  mentorship: mentorshipReducer
})

export default persistReducer(persistConfig, rootReducer)