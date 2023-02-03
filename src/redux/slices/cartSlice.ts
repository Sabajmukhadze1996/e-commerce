import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<object>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction) {
      return state.filter((item: any) => item.brand !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
