import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function addIncomeDB(item, collectionName) {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      incomeName: item.incomeName,
      amount: item.amount,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addItem(item, collectionName) {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      expenseName: item.expenseName,
      amount: item.amount,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteItem(id, collectionName) {
  console.log(id, collectionName);

  try {
    let dataToDelete = await doc(db, collectionName, id);
    deleteDoc(dataToDelete);
    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export async function fetchPost() {
  let data = [];
  await getDocs(collection(db, "fixedExpenses"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data = { ...data, id: doc.id };
        return data;
      });
      data.push(newData);
    })
    .catch((e) => console.log("entrou no erro " + e));

  await getDocs(collection(db, "variableExpenses"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data = { ...data, id: doc.id };
        return data;
      });
      data.push(newData);
    })
    .catch((e) => console.log("entrou no erro " + e));

  await getDocs(collection(db, "capitalAccumulation"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data = { ...data, id: doc.id };
        return data;
      });
      data.push(newData);
    })
    .catch((e) => console.log("entrou no erro " + e));

  return data;
}

export async function getAllIncomes() {
  let data = [];
  await getDocs(collection(db, "inputIncome"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data = { ...data, id: doc.id };
        return data;
      });
      data = newData;
    })
    .catch((e) => console.log("entrou no erro " + e));

  return data;
}
