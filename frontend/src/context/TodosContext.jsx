import { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(true);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
