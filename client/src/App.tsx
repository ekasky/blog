import { Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Homepage />}></Route>

      <Route path="*" element={<NotFoundPage />} />

    </Routes>

  );
  
}
