import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BloodTestData } from '@/types/blood-test-data';

export const ocrApi = createApi({
  reducerPath: 'ocrApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_OCR_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    extractDataFromImage: builder.mutation<BloodTestData, { data: string }>({
      query: (body) => ({
        url: '/extract',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useExtractDataFromImageMutation } = ocrApi;
