import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { MarkersArr } from '@/types/blood-test-data';

import { setMarkers } from './MarkersSlice';

export const markersApi = createApi({
  reducerPath: 'markersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MARKERS_URL,
  }),
  endpoints: (builder) => ({
    getMarkers: builder.query<MarkersArr, void>({
      query: () => ({
        url: '/markers/language/en',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMarkers(data));
        } catch (err) {
          console.error('Markers fetching failed ', err);
        }
      },
    }),
  }),
});

export const { useGetMarkersQuery, useLazyGetMarkersQuery } = markersApi;
