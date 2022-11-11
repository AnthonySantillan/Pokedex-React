import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import InsetDividers from "./componentes/Table/table";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  if(pokemonType == 'fire')
  {
    document.documentElement.style.setProperty('--main-bg-color', 'red');
  }
  else if(pokemonType == 'electric')
  {
    document.documentElement.style.setProperty('--main-bg-color', 'yellow');
  }
  else if(pokemonType == 'water')
  {
    document.documentElement.style.setProperty('--main-bg-color', 'cyan');
  }
  else if(pokemonType == 'earth')
  {
    document.documentElement.style.setProperty('--main-bg-color', 'brown');
  }
  
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
      getimages(res.data.name);
    } catch (e) {
      console.log(e);
    }
  };
  const getimages = async (name) => {
    const toArray = [];
    try {
      const url = `https://img.pokemondb.net/artwork/large/${name}.jpg`
      // https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg
      const res = await axios.get(url);
      toArray.push(res.data);
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
                  {/* <img src={data.sprites["front_default"]}/> */}
                  <img src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}/>
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
