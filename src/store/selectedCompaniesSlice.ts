import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '../types';

type SelectedIdsState = {
  [id: string]: boolean;
};

const initialState: SelectedIdsState = {};

const selectedCompaniesSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    toggleSelectAll: (state, action: PayloadAction<string[]>) => {
      const allId = action.payload;
      const allSelected = allId.length === Object.keys(state).length;

      if (allSelected) {
        return {};
      } else {
        // Если не все выбраны, добавляем отсутствующие ID
        allId.forEach((id) => {
          state[id] = true;
        });
      }
    },

    toggleSelectId: (state, action: PayloadAction<Company['id']>) => {
      const id = action.payload;

      if (state[id]) {
        delete state[id];
      } else {
        state[id] = true;
      }
    },

    clearSelectionAll: () => {
      return {};
    },

    removeSelected: (state, action: PayloadAction<Company['id']>) => {
      delete state[action.payload];
    },
  },
});

export const {
  toggleSelectAll,
  toggleSelectId,
  clearSelectionAll,
  removeSelected,
} = selectedCompaniesSlice.actions;
export default selectedCompaniesSlice.reducer;
