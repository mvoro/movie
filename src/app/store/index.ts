import { configureStore } from '@reduxjs/toolkit';
import { layoutSliceReducer } from './slices/layoutSlice';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';
import { genreApi } from '@/entities/genre';

export const makeStore = () =>
    configureStore({
        reducer: {
            layout: layoutSliceReducer,
            [movieApi.reducerPath]: movieApi.reducer,
            [genreApi.reducerPath]: genreApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                movieApi.middleware,
                genreApi.middleware,
            ),
    });

// public endpoints
export { useAppSelector, useAppDispatch } from './helpers/hooks';
