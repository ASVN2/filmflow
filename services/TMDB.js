import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;
const tmdbApiKey = process.env.TMDB_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tbdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3` }),
  endpoints: () => {
    endpoints: (builder) => ({
      // Get Movies by [Type]
      getMovies: builder.query({
        query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
      }),
    });
  },
});

export const { useGetMoviesQuery } = tmdbApi;
