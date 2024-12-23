import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './types/stateSchema';
import { layoutSliceReducer } from './slices/layoutSlice';

export const store = configureStore<StateSchema>({
    reducer: {
        layout: layoutSliceReducer,
    },
});

// public api
export { useAppSelector, useAppDispatch } from './helpers/hooks';
