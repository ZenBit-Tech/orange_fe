import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { BloodTestData, BloodTestValidation } from '@/constants/blood-test-data';

interface BloodTestState {
  extractedData: BloodTestData | null;
  validationData: BloodTestValidation | null;
  isValidating: boolean;
  error: string | null;
}

const initialState: BloodTestState = {
  extractedData: null,
  validationData: null,
  isValidating: false,
  error: null,
};

export const bloodTestSlice = createSlice({
  name: 'bloodTest',
  initialState,
  reducers: {
    setExtractedData: (state, action: PayloadAction<BloodTestData | null>) => {
      state.extractedData = action.payload;
    },
    setValidationData: (state, action: PayloadAction<BloodTestValidation | null>) => {
      state.validationData = action.payload;
    },
    setIsValidating: (state, action: PayloadAction<boolean>) => {
      state.isValidating = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setExtractedData, setValidationData, setIsValidating, setError } =
  bloodTestSlice.actions;

export default bloodTestSlice.reducer;
