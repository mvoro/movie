import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = () => {
    return fetchBaseQuery({
        baseUrl: process.env.API_LINK,
        prepareHeaders: (headers) => {
            const apiKey = process.env.TMDB_API_KEY;
            if (apiKey) {
                headers.set('Authorization', 'Bearer ' + apiKey);
            }
            return headers;
        },
    });
};
