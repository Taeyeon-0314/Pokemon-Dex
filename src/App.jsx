import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 포켓몬도감과 디테일 페이지 추가 */}
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
