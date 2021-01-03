import {createContext} from "react";

const initialTransactions = [
    {amount : 200, des : "Cash"},
      {amount : 600, des : "Cash"},
      {amount : -300, des : "Camera"}
]

export const TransactionContext = createContext(initialTransactions);