const pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0%27'
const pokemons = []

function getAllPokemon(){
    fetch(pokemon)
        .then(response => response.json())
        .then(data => pokemons.push(...data.pokemon))
}
