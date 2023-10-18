// Passo 1: Obtenha a URL atual
const url = window.location.href;

// Passo 2: Extraia o parâmetro "pokemon" da URL
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
console.log(pokemonId)
if (pokemonId) {
    // Passo 3: Faça uma requisição à API do Pokemon usando o valor do parâmetro
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Obtém o nome do Pokémon a partir dos dados da API
            const pokemonName = data.name;

            // Seleciona o elemento div onde você deseja inserir o nome do Pokémon
            const pokemonNameElement = document.getElementById("pokemon-detail");

            // Atualiza o conteúdo do elemento com o nome do Pokémon
            pokemonNameElement.innerHTML = "<h1>" + pokemonName + "</h1>";
        })
        .catch(function(error) {
            console.error("Erro na requisição à API do Pokemon: " + error);
        });
} else {
    console.error("O parâmetro 'pokemon' não foi encontrado na URL.");
}
