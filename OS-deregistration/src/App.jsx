import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/Page3.jsx";
import Page4 from "./components/Page4.jsx";
import Page5 from "./components/Page5.jsx";
import Page6 from "./components/Page6.jsx";
import Page7 from "./components/Page7.jsx";
import Page8 from "./components/Page8.jsx";
import Page9 from "./components/Page9.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/1" element={<Avatars />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
        <Route path="/7" element={<Page7 />} />
        <Route path="/8" element={<Page8 />} />
        <Route path="/9" element={<Page9 />} />
        <Route path="/" element={<Navigate to="/1" replace />} />
      </Routes>
    </>
  );
}

export default App;
