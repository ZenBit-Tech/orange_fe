import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { MarkersArr } from '@/constants/blood-test-data';

interface markersState {
  data: MarkersArr | null;
}

const initialState: markersState = {
  data: null,
};

const markersSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    setMarkers: (state, action: PayloadAction<MarkersArr>) => {
      state.data = action.payload;
    },
    clearMarkers: (state) => {
      state.data = null;
    },
  },
});

export const { setMarkers, clearMarkers } = markersSlice.actions;
export default markersSlice.reducer;
