import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction  } from "@reduxjs/toolkit";

export interface DataState {
    data: any[];
    dataLoaded: Boolean;
}

const initialState: DataState = {
    data: [],
    dataLoaded: false,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<any[]>) => {
            state.data = action.payload;
            state.dataLoaded = true;
        },
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
