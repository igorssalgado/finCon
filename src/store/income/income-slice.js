import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState: {
    income: "",
    incomeTotal: "",
  },
  reducers: {
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    setIncomeTotalAction: (currentSlice, action) => {
      currentSlice.incomeTotal = action.payload;
    },
  },
});

export const { setIncomeAction, setIncomeTotalAction } = incomeSlice.actions;
