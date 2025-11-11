import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_AUTH_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    sendMagicLink: builder.mutation<{ message: string }, { email: string }>({
      query: (body) => ({
        url: '/send-link',
        method: 'POST',
        body,
      }),
    }),

    verifyMagicLink: builder.query<
      { accessToken: string; email: string },
      { token: string; email: string }
    >({
      query: ({ token, email }) => ({
        url: `/verify?token=${token}&email=${encodeURIComponent(email)}`,
      }),
    }),
  }),
});

export const { useSendMagicLinkMutation, useLazyVerifyMagicLinkQuery } = authApi;
