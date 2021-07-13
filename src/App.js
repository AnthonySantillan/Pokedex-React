import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

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
  console.log(pokemonData);

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
            <article className="card">
             <img src="./images/fondo2.jpg" alt="imagen header card" class="card-header"></img>
            
            <div className="card-body">
            <img className="card-body-img" src={data.sprites["front_default"]} />
            <h1 class="card-body-title">
                    {pokemon}
                </h1>
            </div>
          <div class="card-footer">
              <table>
                <tr>
                  <td>
                  <div className="card-body-text">Tipo</div>
                  <div className="card-footer-social">{pokemonType}</div>
                  </td>
                
                  <td>
                  <div className="card-body-text">Altura</div>
                  <div className="card-footer-social">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                  </td>
               
                  <td>
                  <div className="card-body-text">Ancho</div>
                  <div className="card-footer-social">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                  </td>
                  <td>
                  <div className="card-body-text">Numero de batallas</div>
                  <div className="card-footer-social">{data.game_indices.length}</div>
                  </td>
                 </tr> 
                  </table>
           </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default App;
// const toArray = [];
// try {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   const pokeDesc = `https://pokeapi.co/api/v2/ability/${pokemon}`;

//   const resPokemon = await axios.get(url);
//   const resPokemonEtc = await axios.get(pokeDesc);

//   axios.all([resPokemon, resPokemonEtc]).then(
//     axios.spread((...allData) => {
//       console.log(allData);
//     })
//   );
//   // console.log(res);
//   toArray.push(res.data);
//   setPokemonData(toArray);
// } catch (e) {
//   console.log(e);
// }
