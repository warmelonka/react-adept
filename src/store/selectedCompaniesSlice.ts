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
      const allSelected = allId.every((id) => state[id]);

      if (allSelected) {
        // Если все выбраны, снимаем выбор у каждого ID
        allId.forEach((id) => {
          delete state[id];
        });
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

    clearSelection: () => {
      return {};
    },
  },
});

export const { toggleSelectAll, toggleSelectId, clearSelection } =
  selectedCompaniesSlice.actions;
export default selectedCompaniesSlice.reducer;
