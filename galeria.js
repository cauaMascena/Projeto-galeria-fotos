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

const limparId = (urlImagem) => urlImagem.split("/")[2]
    .split(".")[0]
    .replace("", "-")
    .toLowerCase()

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)

}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()



const criarSlide = (urlImagem, indice, arr) => {
    const slideContainer = document.querySelector(".slide-container")

    const novoSlide = document.createElement("div")
    novoSlide.href = urlImagem
    novoSlide.classList.add("slide")
    novoSlide.id = limparId(urlImagem)

    const indice = indice > 0 ? indice -1 : arr.length -1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length -1 ? indice +1 :0
    const idProximo = limparId(arr[indiceProximo])

    // const indiceAnterior = indice - 1
    // if (indice >0) {
    //     indiceAnterior = indice - 1
    // }else{
    //     indiceAnterior = arr.length - 1
    // }
   

    novoSlide.innerHTML = ` <div class"imagem-container">
    <a href="#" class="fechar">&#10006;</a>
    <a href="" class="navegacao anterior">&#171;</a>
    <img src="${urlImagem}" alt="">
    <a href="" class="navegacao proximo">&#187;</a>
    </div>`

    slideContainer.appendChild(novoSlide)

}


const carregarSlides = () => imagens.forEach(criarItem)

carregarSlides()





