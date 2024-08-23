import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 포켓몬도감과 디테일 페이지 추가 */}
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<Detail />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
