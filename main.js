const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const input = document.querySelector('.pokemon-input');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonImage = document.querySelector('.pokemon-image');

function getPokemonInfo() {
  axios.get(apiUrl + input.value)
  .then(function (res) {
    pokemonName.innerHTML = res.data.forms[0].name;
    pokemonImage.src = res.data.sprites.front_default;
  })
  .catch(function (err) {
    pokemonName.innerHTML = "(An error has occured)";
    pokemonImage.src = "";
  })
}

const button = document.querySelector('.pokemon-button');
button.addEventListener('click', getPokemonInfo);