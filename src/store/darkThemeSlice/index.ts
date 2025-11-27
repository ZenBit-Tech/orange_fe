import { createSlice } from '@reduxjs/toolkit';

interface isBlackTheme {
  isBlackTheme: boolean;
}

const initialState: isBlackTheme = {
  isBlackTheme: false,
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  initialState.isBlackTheme = true;
}

export const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    flipTheme: (state) => {
      state.isBlackTheme = !state.isBlackTheme;
    },
  },
});

export const { flipTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
