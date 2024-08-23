import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 포켓몬도감과 디테일 페이지 추가 */}
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
