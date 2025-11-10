import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ReviewCustomizeData } from '@/constants/marker';

export const reviewCustomizeApi = createApi({
  reducerPath: 'reviewCustomizeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MARKERS_URL,
  }),
  endpoints: (builder) => ({
    sendDataToBackend: builder.mutation<ReviewCustomizeData, ReviewCustomizeData>({
      query: (body) => ({
        url: '/receive-data',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendDataToBackendMutation } = reviewCustomizeApi;
