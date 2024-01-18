import { createSlice } from "@reduxjs/toolkit";

export const currentExpenseSlice = createSlice({
  name: "currentExpenseSlice",
  initialState: {
    currentExpense: [],
  },
  reducers: {
    addCurrentExpenseAction: (currentSlice, action) => {
      currentSlice.currentExpense = action.payload;
    },
    addExpenseAction: (currentSlice, action) => {
      currentSlice.currentExpense.push(action.payload);
    },
  },
});

export const { addCurrentExpenseAction, addExpenseAction } =
  currentExpenseSlice.actions;
