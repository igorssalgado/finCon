import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState: {
    income: undefined,
    incomeTotal: undefined,
  },
  reducers: {
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    setIncomeTotalAction: (currentSlice, action) => {
      currentSlice.incomeTotal = action.payload;
    },
    addInputAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    deleteInputAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const {
  setIncomeAction,
  setIncomeTotalAction,
  addInputAction,
  deleteInputAction,
} = incomeSlice.actions;
