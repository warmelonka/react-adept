import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '../types';

const initialState: Company[] = [
  {
    id: '1',
    name: 'Какая-то компания',
    address: 'г. Москва, ул. Горького 118',
  },
  {
    id: '2',
    name: 'Какая-то компания №2',
    address: 'г. Санкт-Петербург, ул. Московская 181',
  },
];

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      return [action.payload, ...state];
    },

    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.findIndex(
        (company) => company.id === action.payload.id,
      );
      state[index] = action.payload;
    },

    removeCompany: (state, action: PayloadAction<Company['id']>) => {
      return state.filter((company) => company.id !== action.payload);
    },

    removeSelectedCompanies: (state, action: PayloadAction<string[]>) => {
      const selectedIds = action.payload;
      return state.filter((company) => !selectedIds[company.id]);
    },
  },
});

export const {
  addCompany,
  updateCompany,
  removeCompany,
  removeSelectedCompanies,
} = companiesSlice.actions;
export default companiesSlice.reducer;
