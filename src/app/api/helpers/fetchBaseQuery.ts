import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_LINK,
    prepareHeaders: (headers) => {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        if (apiKey) {
            headers.set('Authorization', 'Bearer ' + apiKey);
        }
        return headers;
    },
});
