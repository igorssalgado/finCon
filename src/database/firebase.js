import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import React from "react";

const appSettings = {
  databaseURL: "https://playground-40791-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const fixedExpenses = ref(database, "fixedExpenses");
const variableExpenses = ref(database, "variableExpenses");
const capitalAccumulation = ref(database, "capitalAccumulation");

export function addToDataBase(currentExpenseTable, expense) {
  getFromDataBase();

  if (currentExpenseTable.expenseName === "Fixed Expenses") {
    push(fixedExpenses, expense);
  } else if (currentExpenseTable.expenseName === "Varliable Expenses") {
    push(variableExpenses, expense);
  } else {
    push(capitalAccumulation, expense);
  }
}

/////
// precisa pegar as informacoes do Firebase, e exibir dentro dos components
//
//
//
//
//
//
//
//
//

export function getFromDataBase() {
  let currentFixedExpenses = [];
  let currentVariableExpenses = [];
  let currentCapitalAccumulation = [];
  let currentExpensesObject = {
    currentFixedExpenses: [],
  };

  onValue(fixedExpenses, function (snapshot) {
    let fixedExpensesArray = Object.values(snapshot.val());

    for (let i = 0; i < fixedExpensesArray.length; i++) {
      currentFixedExpenses.push(fixedExpensesArray[i]);
    }
  });

  onValue(variableExpenses, function (snapshot) {
    let variableExpensesArray = Object.values(snapshot.val());

    for (let i = 0; i < variableExpensesArray.length; i++) {
      currentVariableExpenses.push(variableExpensesArray[i]);
    }
  });

  onValue(capitalAccumulation, function (snapshot) {
    let capitalAccumulationArray = Object.values(snapshot.val());

    for (let i = 0; i < capitalAccumulationArray.length; i++) {
      currentCapitalAccumulation.push(capitalAccumulationArray[i]);
    }
  });

  currentExpensesObject = {
    currentFixedExpenses: currentFixedExpenses,
    currentVariableExpenses: currentVariableExpenses,
    currentCapitalAccumulation: currentCapitalAccumulation,
  };

  return currentExpensesObject;
}
