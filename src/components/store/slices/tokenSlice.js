import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { token: false },
  reducers: {
    addToken: (state, action) => {
      state.token = true;
    },
  },
});

export const tokenActions = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
