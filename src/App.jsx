// App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import Dex from "./pages/Dex";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
