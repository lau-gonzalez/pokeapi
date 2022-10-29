const MAX_POKEMONS = 50;

export const getPokemonsAPI = async () => {
  const pokemons = [];

  try {
    for (let index = 1; index <= MAX_POKEMONS; index++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      const pokemon = await response.json();
      pokemons.push(pokemon);
    }
  } catch (error) {
    console.log(error);
  }

  return pokemons;
};
