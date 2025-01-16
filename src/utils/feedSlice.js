import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeFeed: (state, action) => {
            return state.filter(user => user._id !== action.payload);  // Remove the user with the given _id
        },
    }
});

export const {addFeed, removeFeed} = feedSlice.actions;

export default feedSlice.reducer;