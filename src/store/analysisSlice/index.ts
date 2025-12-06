import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { FullBloodTestAnalysisResult } from '@/pages/AnalysisResultPage/types/types';

interface AnalysisState {
  result: FullBloodTestAnalysisResult | null;
}

const initialState: AnalysisState = {
  result: null,
};

const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    setAnalysisResult: (state, action: PayloadAction<FullBloodTestAnalysisResult>) => {
      state.result = action.payload;
    },
    clearAnalysisResult: (state) => {
      state.result = null;
    },
  },
});

export const { setAnalysisResult, clearAnalysisResult } = analysisSlice.actions;
export default analysisSlice.reducer;
