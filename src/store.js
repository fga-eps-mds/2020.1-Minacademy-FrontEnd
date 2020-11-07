import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import rootReducer from './slices/rootReducer' // eslint-disable-line import/no-cycle

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  })
});

const persistor = persistStore(store)

export { store, persistor }