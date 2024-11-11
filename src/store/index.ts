import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companiesSlice.ts';
import selectedCompaniesReducer from './selectedCompaniesSlice.ts';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
    selection: selectedCompaniesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
