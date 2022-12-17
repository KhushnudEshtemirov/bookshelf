import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import AllBook from "./pages/all-book/all-book";
import LoginPage from "./pages/sign-up/login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-book" element={<AllBook />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
