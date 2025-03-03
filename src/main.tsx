import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Importação do roteador
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Portifolio-OFC/"> 
    <App />
  </BrowserRouter>
);
