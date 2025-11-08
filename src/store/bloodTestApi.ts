import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BloodTestData, BloodTestValidation } from '@/constants/blood-test-data';

export const bloodTestApi = createApi({
  reducerPath: 'bloodTestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BLOOD_TEST_URL,
    credentials: 'include',
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
