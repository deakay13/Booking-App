import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexHome from "./home/IndexHome";
import IndexAdmin from "./admin/IndexAdmin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/Home/*" element={<IndexHome />} />
        <Route path="/Admin/*" element={<IndexAdmin />} />
      </Routes>
    </Router>
  );
}


