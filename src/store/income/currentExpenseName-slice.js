import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState: {
    income: "",
  },
  reducers: {
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { setIncomeAction } = incomeSlice.actions;
