import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import InsetDividers from "./componentes/Table/table";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

  document.documentElement.style.setProperty('--main-bg-color', randomColor);
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {
        return (
          <div className="flex">
            <div className="container">
              <div className="colored"></div>
              <div className="info">
                <div className="imag">
                  <img src={data.sprites["front_default"]}/>
                </div>
                <div className="price">
                  <span>Puntos de habilidad : {data.base_experience}</span>
                </div>
              </div>
              <div className="form">
                <h3>Informacion Adicional</h3>
                <InsetDividers parentToChild={pokemonData}></InsetDividers>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
