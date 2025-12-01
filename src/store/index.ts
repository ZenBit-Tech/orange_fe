import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import markersReducer from './MarkersSlice';
import analysisSlice from './analysisSlice';
import { authApi } from './authApi';
import authSlice from './authSlice';
import { bloodTestApi } from './bloodTestApi';
import bloodTestReducer from './bloodTestSlice/bloodTestSlice';
import darkThemeReducer from './darkThemeSlice';
import { markersApi } from './markersApi';
import { ocrApi } from './ocrApi';
import { reviewCustomizeApi } from './reviewCustomizeApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ocrApi.reducerPath]: ocrApi.reducer,
    [bloodTestApi.reducerPath]: bloodTestApi.reducer,
    [reviewCustomizeApi.reducerPath]: reviewCustomizeApi.reducer,
    [markersApi.reducerPath]: markersApi.reducer,
    bloodTest: bloodTestReducer,
    analysis: analysisSlice,
    auth: authSlice,
    darkTheme: darkThemeReducer,
    markers: markersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(ocrApi.middleware)
      .concat(bloodTestApi.middleware)
      .concat(reviewCustomizeApi.middleware)
      .concat(markersApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
