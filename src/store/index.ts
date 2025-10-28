import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { authApi } from './authApi';
import { bloodTestApi } from './bloodTestApi';
import bloodTestReducer from './bloodTestSlice/bloodTestSlice';
import { ocrApi } from './ocrApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ocrApi.reducerPath]: ocrApi.reducer,
    [bloodTestApi.reducerPath]: bloodTestApi.reducer,
    bloodTest: bloodTestReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(ocrApi.middleware)
      .concat(bloodTestApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
