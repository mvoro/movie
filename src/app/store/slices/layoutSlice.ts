import { LayoutState } from './types/layout';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LayoutState = {
    toggledSidebar: false,
};

export const layoutSlice = createSlice({
    name: 'layout-slice',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.toggledSidebar = !state.toggledSidebar;
        },
    },
});
export const { actions: layoutSliceActions, reducer: layoutSliceReducer } =
    layoutSlice;
