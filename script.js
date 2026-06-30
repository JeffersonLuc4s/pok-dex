const nome = document.getElementById("nome")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")

async function buscarPokemon() {
    const resposta = await fetch("")

    const pokemons = resposta.json()
}

function mostrarPokemon() {
    
}

botao.addEventListener("click", () => {
    buscarPokemon()
    nome.value = ""
})