let pokemon = ["Pikachu","Charmander"
,"Bulbasaur","Squirtle"];

function arrayMayus(array) {
    const mayus = array.map(e => e.toUpperCase())
    return mayus
}

console.log(arrayMayus(pokemon))