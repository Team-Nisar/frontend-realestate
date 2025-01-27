import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterContextProvider>
        <App />
      <Toaster/>
    </FilterContextProvider>
  </StrictMode>
);
