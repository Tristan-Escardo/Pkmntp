function getAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0%27')
        .then(response => response.json())
        .then(data => console.log(data))
}