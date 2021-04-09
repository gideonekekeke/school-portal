import React, { createContext, useState, useEffect } from "react";
import { app } from "../Peter/firebase";

export const AppContext = createContext();
const db = app.firestore().collection("studentreg")


export const AppProvider = ({ children }) => {
  const [current, setCurrent] = useState(null)
  const [datause, setdatause] = useState(null);


  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user);

      db.doc(user.uid).get()
        .then((doc) => {
          setdatause(doc.data())
        })

    });
  }, []);
  return (
    <AppContext.Provider value={{
      current,
      datause

    }}>
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};