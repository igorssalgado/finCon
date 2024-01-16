import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addThing(item, collectionName) {
  console.log(item);

  try {
    // const docRef = await addDoc(collection(db, "2023"), {
    //   fixedExpenses: [
    //     { expenseName: "ff", amount: 1 },
    //     { expenseName: "f2", amount: 1 },
    //     { expenseName: "f3", amount: 1 },
    //     { expenseName: "f4", amount: 1 },
    //   ],
    //   variableExpenses: [
    //     { expenseName: "v1", amount: 1 },
    //     { expenseName: "v2", amount: 1 },
    //     { expenseName: "v3", amount: 1 },
    //     { expenseName: "v4", amount: 1 },
    //   ],
    //   capitalAccumulation: [
    //     { expenseName: "c1", amount: 1 },
    //     { expenseName: "c2", amount: 1 },
    //     { expenseName: "c3", amount: 1 },
    //     { expenseName: "c4", amount: 1 },
    //   ],
    // });
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

  // console.log(JSON.stringify(data));

  return data;
}
