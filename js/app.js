fetch('https://pokeapi.co/api/v2/pokemon?limit=1000000')
.then(response => response.json())
.then(data => {
    //console.log(data)
    for (var i in data.results){
        //console.log('url pkmn', data.results[i].url)
        let pokemonName = document.createElement('button')
        pokemonName.textContent =  data.results[i].name
        document.getElementById('namePokemon').append(pokemonName)
        pokemonName.style.margin = '1%'

        //TODO pour chaque pokemon appeler le detail a l'aide de fetch
        
        fetch(data.results[i].url)
        .then(response => response.json())
        .then(data => console.log(data))
            
            /*
            let pokemonAbilities = document.createElement('div')
            pokemonAbilities.textContent = data
            document.getElementById('abilitiesPokemon').append(pokemonAbilities)
            
            
            let pokemonAbilities = document.createElement('p')
            pokemonAbilities.textContent = data.abilities
            document.getElementById('abilitiesPokemon').append(pokemonAbilities)
            
            for (var j in data.abilities){
                console.log(data.abilities[j].ability)
                let pokemonAbilities = document.createElement('p')
                pokemonAbilities.textContent = data.abilities[j].ability
                document.getElementById('abilitiesPokemon').append(pokemonAbilities)
            }
            */

    }
})