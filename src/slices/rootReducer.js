import { combineReducers } from "redux" // eslint-disable-line import/no-extraneous-dependencies
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import tutorialReducer from './tutorialSlice'
import userReducer from './usersSlice'
import mentorReducer from './mentorSlice'
import learnerReducer from './learnerSlice'

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'tutorial', 'mentor', 'learner']
}

const rootReducer = combineReducers({
  user: userReducer,
  tutorial: tutorialReducer,
  mentor: mentorReducer,
  learner: learnerReducer
});

export default persistReducer(persistConfig, rootReducer)