import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addItem(item, collectionName) {
  console.log(item);

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

export async function fetchPost() {
  let data = [];
  await getDocs(collection(db, "fixedExpenses"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      data.push(newData);
    })
    .catch((e) => console.log("entrou"));

  await getDocs(collection(db, "variableExpenses"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      data.push(newData);
    })
    .catch((e) => console.log("entrou"));

  await getDocs(collection(db, "capitalAccumulation"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      data.push(newData);
    })
    .catch((e) => console.log("entrou"));

  return data;
}
