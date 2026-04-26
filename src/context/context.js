"use client";
import { createContext, useState } from "react";

export const MsgData = createContext(null);

export default function Context({ children }) {
  const [message, setMessage] = useState([]);
  return (
    <MsgData.Provider value={{ message, setMessage }}>
      {children}
    </MsgData.Provider>
  );
}
