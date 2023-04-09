import React, { useState } from 'react'

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([])
  const [showPokemon, setShowPokemon] = useState(false)

  const buscarPokemon = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      return response.json();
    }).then(response => {
      console.log(response.results);
      setPokemon(response.results)
      setShowPokemon(true) // Mostrar los pokemones
    }).catch(err=>{
      console.log(err);
    });
  }

  const ocultarPokemon = () => {
    setShowPokemon(false) // Ocultar los pokemones
  }

  return (
    <div>
      <button onClick={buscarPokemon}>Fetch Pokemon</button>
      {showPokemon && // Mostrar la lista de pokemones solo si showPokemon es verdadero
        <ul>
          {pokemon.map((pokemon, indice)=> <li key={indice}>{pokemon.name}</li>)}
        </ul>
      }
      {showPokemon && // Mostrar el botón solo si showPokemon es verdadero
        <button onClick={ocultarPokemon}>Hide Pokemon</button>
      }
    </div>
  )
}

export default Pokemons
