import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ReviewCustomizeData } from '@/components/Marker/types';
import type { FullBloodTestAnalysisResult } from '@/types/markers-interpretation';

export const reviewCustomizeApi = createApi({
  reducerPath: 'reviewCustomizeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MARKERS_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendDataToBackend: builder.mutation<FullBloodTestAnalysisResult, ReviewCustomizeData>({
      query: (body) => ({
        url: '/analyze',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendDataToBackendMutation } = reviewCustomizeApi;
