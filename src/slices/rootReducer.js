import { combineReducers } from "redux" // eslint-disable-line import/no-extraneous-dependencies
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import tutorialReducer from './tutorialSlice'
import userReducer from './usersSlice'
import mentorReducer from './mentorSlice'
import learnerReducer from './learnerSlice'
import certificateReducer from './certificateSlice'
import modalReducer from './modalSlice'
import chatReducer from './chatSlice' // eslint-disable-line import/no-cycle

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'tutorial', 'mentor', 'learner', 'certificate', 'chat']
}

const appReducer = combineReducers({
  user: userReducer,
  tutorial: tutorialReducer,
  mentor: mentorReducer,
  learner: learnerReducer,
  certificate: certificateReducer,
  modal: modalReducer,
  chat: chatReducer
})
/* eslint-disable no-undef */
const rootReducer = (state, action) => {
  if (action.type === 'users/logout/fulfilled') {
      storageSession.removeItem('persist:root') 
      sessionStorage.clear()
      state = undefined; // eslint-disable-line no-param-reassign
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer)