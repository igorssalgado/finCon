import { createSlice } from "@reduxjs/toolkit";

export const allExpensesSlice = createSlice({
  name: "allExpensesSlice",
  initialState: {
    allExpenses: undefined,
  },
  reducers: {
    addAllExpensesAction: (currentSlice, action) => {
      currentSlice.allExpenses = action.payload;
    },
  },
});

export const { addAllExpensesAction } = allExpensesSlice.actions;
