import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  get,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-40791-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const fixedExpenses = ref(database, "2023/fixedExpenses");
const variableExpenses = ref(database, "2023/variableExpenses");
const capitalAccumulation = ref(database, "2023/capitalAccumulation");

export function getData() {
  // let value;
  // const expense = ref(database, "2023");

  // onValue(expense, function (snapshot) {
  //   value = JSON.stringify(snapshot);
  // });

  // returnvalue;
  // // nao consigo pegar os dados do firebase quando inicia o programa, so pega pelo onValue, quando os valores no DB mudam.

  const obj = {
    fixedExpenses: [
      { name: "f1", amount: 0 },
      { name: "f2", amount: 0 },
      { name: "f3", amount: 0 },
      { name: "f4", amount: 0 },
      { name: "f5", amount: 2650 },
    ],
    variableExpenses: [
      { name: "v1", amount: 0 },
      { name: "v2", amount: 0 },
      { name: "v3", amount: 0 },
      { name: "v4", amount: 0 },
      { name: "v5", amount: 1590 },
    ],
    capitalAccumulation: [
      { name: "c1", amount: 0 },
      { name: "c2", amount: 0 },
      { name: "c3", amount: 0 },
      { name: "c4", amount: 0 },
      { name: "c5", amount: 1060 },
    ],
  };

  // // {"capitalAccumulation":{"-NnifhL_5l6AO0V5a-E4":{"amount":0,"expenseName":"c1"}},"fixedExpenses":{"-NniffK-Y-Rwvt8ZghmL":{"amount":0,"expenseName":"f1"},"-Nnihl-tdFz2E-LqScjT":{"amount":0,"expenseName":"a"},"-Nnii7Q7I8fEw9PC5OM9":{"amount":0,"expenseName":"outro"}},"varExpenses":{"-NnifmMxCPAVnUqEk3My":{"amount":0,"expenseName":"v1"}}}

  return JSON.stringify(obj);
}

export function addExpense(table, item) {
  const expense = ref(database, `2023/${table}`);
  push(expense, item);
}
