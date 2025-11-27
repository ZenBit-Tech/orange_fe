import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '.';
import { logout, setAuth } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_AUTH_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) headers.set('authorization', `Bearer ${token}`);
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(logout());
      window.location.href = '/link-expired';
    }

    return result;
  },

  endpoints: (builder) => ({
    sendMagicLink: builder.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: '/send-link',
        method: 'POST',
        body,
      }),
    }),
    verifyMagicLink: builder.mutation<
      { accessToken: string; email: string },
      { token: string; email: string }
    >({
      query: ({ token, email }) => ({
        url: `/verify?token=${token}&email=${encodeURIComponent(email)}`,
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('accessToken', data.accessToken);
          dispatch(setAuth({ token: data.accessToken }));
        } catch (err) {
          console.error('Magic link verification failed', err);
        }
      },
    }),
  }),
});

export const { useSendMagicLinkMutation, useVerifyMagicLinkMutation } = authApi;
