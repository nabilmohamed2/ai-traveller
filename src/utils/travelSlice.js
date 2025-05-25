import { createSlice } from "@reduxjs/toolkit"

const travelSlice = createSlice({
    name : "travel",
    initialState : null,
    reducers : {
        addTravelData : (state, action) => {
            return action.payload;
        },
        removeTravelData : (state, action) => {
            return null;
        }
    }
});

export const { addTravelData, removeTravelData } = travelSlice.actions;

export default travelSlice.reducer;