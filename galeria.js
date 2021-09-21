"use strict"

const imagens = [
    "./img/aperolSpritz.jpg",
    "./img/caipirinhaMorango.jpg",
    "./img/margarita.jpg",
    "./img/sexOnTheBeach.jpg",
    "./img/spritz.jpg",
    "./img/tonica.jpg",
    "./img/tropical.jpg",
    "./img/whisky.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()

