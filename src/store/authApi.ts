import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setAuth } from './authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_AUTH_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'],

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
