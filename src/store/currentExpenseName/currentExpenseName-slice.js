import { createSlice } from "@reduxjs/toolkit";

export const currentExpenseNameSlice = createSlice({
  name: "currentExpenseNameSlice",
  initialState: {
    currentExpenseName: "",
  },
  reducers: {
    updateCurrentExpenseNameAction: (currentSlice, action) => {
      currentSlice.currentExpenseName = action.payload;
    },
  },
});

export const { updateCurrentExpenseNameAction } =
  currentExpenseNameSlice.actions;
