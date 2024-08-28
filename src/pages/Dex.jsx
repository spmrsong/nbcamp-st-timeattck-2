import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { useState } from "react";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  //   const navigate = useNavigate();

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 추가된 포켓몬 입니다.");
    } else {
      setSelectedPokemon(...selectedPokemon, pokemon);
    }
  };

  const removePokemon = (pokemon) => {
    //   {* 제거는 필터를 이용해 봅시다 *}
  };

  // const goDetail =
  // navigate("/pokemon-detail?id=${id}")}

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
