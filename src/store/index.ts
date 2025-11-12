import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { authApi } from './authApi';
import authSlice from './authSlice';
import { bloodTestApi } from './bloodTestApi';
import bloodTestReducer from './bloodTestSlice/bloodTestSlice';
import { ocrApi } from './ocrApi';
import { reviewCustomizeApi } from './reviewCustomizeApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ocrApi.reducerPath]: ocrApi.reducer,
    [bloodTestApi.reducerPath]: bloodTestApi.reducer,
    [reviewCustomizeApi.reducerPath]: reviewCustomizeApi.reducer,
    bloodTest: bloodTestReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(ocrApi.middleware)
      .concat(bloodTestApi.middleware)
      .concat(reviewCustomizeApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
