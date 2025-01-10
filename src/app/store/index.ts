import { configureStore } from '@reduxjs/toolkit';
import { layoutSliceReducer } from './slices/layoutSlice';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';

export const makeStore = () =>
    configureStore({
        reducer: {
            layout: layoutSliceReducer,
            [movieApi.reducerPath]: movieApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(movieApi.middleware),
    });

// public api
export { useAppSelector, useAppDispatch } from './helpers/hooks';
