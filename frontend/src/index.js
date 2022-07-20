import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";
import { TodosContextProvider } from "./context/TodosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </TodosContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
