import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('accessToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('accessToken');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
