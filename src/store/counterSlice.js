import { createSlice } from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, incrementByAmount, decrementByAmount, reset} = counterSlicer.actions

export default counterSlicer.reducer;