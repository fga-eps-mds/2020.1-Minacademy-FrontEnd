import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import tutorialReducer from './tutorialSlice';
import userReducer from './usersSlice';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user', 'tutorial'],
};

const rootReducer = combineReducers({
  user: userReducer,
  tutorial: tutorialReducer,
});

export default persistReducer(persistConfig, rootReducer);
