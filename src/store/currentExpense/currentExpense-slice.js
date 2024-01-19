import { createSlice } from "@reduxjs/toolkit";

export const currentExpenseSlice = createSlice({
  name: "currentExpenseSlice",
  initialState: {
    currentExpense: undefined,
  },
  reducers: {
    updateCurrentExpenseAction: (currentSlice, action) => {
      currentSlice.currentExpense = action.payload;
    },
    addExpenseAction: (currentSlice, action) => {
      currentSlice.currentExpense.push(action.payload);
    },
  },
});

export const { updateCurrentExpenseAction, addExpenseAction } =
  currentExpenseSlice.actions;
