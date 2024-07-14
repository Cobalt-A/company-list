import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companiesReducer from '@src/entities/companies'
 
const rootReducer = combineReducers({
  companiesReducer
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
