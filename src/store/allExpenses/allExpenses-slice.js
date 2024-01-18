import { createSlice } from "@reduxjs/toolkit";

export const allExpensesSlice = createSlice({
  name: "allExpensesSlice",
  initialState: {
    allExpenses: [
      [{ expenseName: "fixedddd", amount: 0 }],
      [{ expenseName: "varrr", amount: 0 }],
      [{ expenseName: "accuummm", amount: 0 }],
    ],
  },
  reducers: {
    addAllExpensesAction: (currentSlice, action) => {
      currentSlice.allExpenses = action.payload;
    },
  },
});

export const { addAllExpensesAction } = allExpensesSlice.actions;
