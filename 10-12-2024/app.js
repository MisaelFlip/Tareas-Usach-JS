// Función para obtener los primeros 20 pokemones desde la API, puedo cambiarlo en fila 3 limit
async function obtenerPokemones() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    try {
      //solicitud a la API
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos.results; // regresa la lista de pokemones
    } catch (error) {
      // si hay algun error, deberia mostrarlo en la consola
      console.error("No hay nada:", error);
      return []; // return un array vacío en caso de error
    }
  }
  
  // Función para obtener los detalles de un Pokémon en específico
  async function obtenerDetallesPokemon(url) {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos; // return los datos del Pokémon
    } catch (error) {
      console.error("Error al obtener detalles del Pokémon:", error);
      return {}; // return un objeto vacío en caso de error
    }
  }
  
  // Función para mostrar las tarjetas de los pokemones
  async function mostrarPokemones() {
    const contenedor = document.getElementById("contenedor-pokemones");
    const pokemones = await obtenerPokemones();
  
    for (const pokemon of pokemones) {
      // tarjeta de cada Pokémon
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
  
      // Obtenemos los detalles individuales
      const detalles = await obtenerDetallesPokemon(pokemon.url);
  
      tarjeta.innerHTML = `
        <img src="${detalles.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
      `;
  
      // Agrega la tarjeta al contenedor
      contenedor.appendChild(tarjeta);
    }
  }
  
  // Ejecuta todo
  mostrarPokemones();
  