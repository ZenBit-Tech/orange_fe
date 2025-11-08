import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BloodTestData } from '@/constants/blood-test-data';

export const ocrApi = createApi({
  reducerPath: 'ocrApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_OCR_URL,
    credentials: 'include',
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
