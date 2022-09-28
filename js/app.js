let pokemon = []
fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(data => {
    for (var i in data.results) {
        pokemon.push(JSON.stringify(data.results[i]))
        document.getElementById('test_name').textContent = pokemon
    }
})

var k = 0
var j = 9
let Name = []

while (k < pokemon.lenght) {
    if (pokemon[k] [j] != '"'){
        Name.push(pokemon[k] [j])
        j++;
    } else {
        j++;
    }

    if (pokemon[k] [j] == '}') {
        k++;
        j = 9
    }
}

console.log(Name)