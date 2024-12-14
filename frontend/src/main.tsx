import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./shared/components/molecules/NavBar";
import Footer from "./shared/components/molecules/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Footer />
  </StrictMode>
);
