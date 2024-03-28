import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";

// Components
import Navbar from "@/components/navbar/Navbar";

export default function App() {

  return (
    
    <React.Fragment>

      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />}></Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </React.Fragment>

  );
  
}
