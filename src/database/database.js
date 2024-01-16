import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addThing() {
  try {
    const docRef = await addDoc(collection(db, "2023"), {
      fixedExpenses: [
        { expenseName: "ff", amount: 1 },
        { expenseName: "f2", amount: 1 },
        { expenseName: "f3", amount: 1 },
        { expenseName: "f4", amount: 1 },
      ],
      variableExpenses: [
        { expenseName: "v1", amount: 1 },
        { expenseName: "v2", amount: 1 },
        { expenseName: "v3", amount: 1 },
        { expenseName: "v4", amount: 1 },
      ],
      capitalAccumulation: [
        { expenseName: "c1", amount: 1 },
        { expenseName: "c2", amount: 1 },
        { expenseName: "c3", amount: 1 },
        { expenseName: "c4", amount: 1 },
      ],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

let data;

export async function fetchPost() {
  await getDocs(collection(db, "2023"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data());
      data = newData;
    })
    .catch((e) => console.log("entrou"));

  console.log(JSON.stringify(data));

  return data;
}
