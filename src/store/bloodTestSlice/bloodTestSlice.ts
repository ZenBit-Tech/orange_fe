import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type {
  BloodTestData,
  BloodTestSummaryData,
  BloodTestValidation,
} from '@/types/blood-test-data';

interface BloodTestState {
  extractedData: BloodTestData | BloodTestSummaryData | null;
  validationData: BloodTestValidation | null;
  isValidating: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: BloodTestState = {
  extractedData: null,
  validationData: null,
  isValidating: false,
  isError: false,
  error: null,
};

export const bloodTestSlice = createSlice({
  name: 'bloodTest',
  initialState,
  reducers: {
    setExtractedData: (
      state,
      action: PayloadAction<BloodTestData | BloodTestSummaryData | null>,
    ) => {
      state.extractedData = action.payload;
    },
    setValidationData: (state, action: PayloadAction<BloodTestValidation | null>) => {
      state.validationData = action.payload;
      state.isError = false;
      state.error = null;
    },
    setIsValidating: (state, action: PayloadAction<boolean>) => {
      state.isValidating = action.payload;
      if (action.payload === true) {
        state.isError = false;
        state.error = null;
      }
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isError = action.payload !== null;
    },
  },
});

export const { setExtractedData, setValidationData, setIsValidating, setError } =
  bloodTestSlice.actions;

export default bloodTestSlice.reducer;
