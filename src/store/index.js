import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import { reduxPersistConfig } from "../config/reduxPersist";
import { cohereApi } from "./apis/cohereApi";

const reducers = combineReducers({
  [cohereApi.reducerPath]: cohereApi.reducer,
});

const _persistedReducer = persistReducer(reduxPersistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      cohereApi.middleware,
    ),
  devTools: true,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
