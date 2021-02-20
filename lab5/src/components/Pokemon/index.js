import React from 'react';

function Pokemon(pokemon){
    return(
    <div>
        <h2><u>{pokemon.name}</u>!</h2>
        <p>It's ID is #{pokemon.id}</p>
        <img src={pokemon.sprites} />
  </div>

    )
    };

  export default Pokemon;