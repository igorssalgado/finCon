import { configureStore } from "@reduxjs/toolkit";
import { allExpensesSlice } from "./allExpenses/allExpenses-slice";
import { currentExpenseSlice } from "./currentExpense/currentExpense-slice";
import { currentExpenseNameSlice } from "./currentExpenseName/currentExpenseName-slice";
import { incomeSlice } from "./income/currentExpenseName-slice";

const store = configureStore({
  reducer: {
    ALLEXPENSES: allExpensesSlice.reducer,
    CURRENTEXPENSE: currentExpenseSlice.reducer,
    CURRENTEXPENSENAME: currentExpenseNameSlice.reducer,
    INCOME: incomeSlice.reducer,
  },
});

export { store };
