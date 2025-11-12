import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BloodTestData, BloodTestValidation } from '@/constants/blood-test-data';

export const bloodTestApi = createApi({
  reducerPath: 'bloodTestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BLOOD_TEST_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    validateBloodTest: builder.mutation<BloodTestValidation, BloodTestData>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useValidateBloodTestMutation } = bloodTestApi;
