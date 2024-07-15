//SELETOR UL (LISTA)
const listaOpcoes = document.querySelector (".secaoDetalhesConta_opcoesTransacoes")

//OUVIR EVENTO DE CLICK
listaOpcoes.addEventListener("click", identificarOpcoes)

//AÇÃO DEPOIS DO CLICK
function identificarOpcoes (event) {

    //IDENTIFICAR ONDE OCORREU O CLICK
    const elemento = event.target

    //VERIFICANDO SE É LI
    if (elemento.tagName == "LI") {

        //RECUPERANDO ID
        const id = elemento.id
        
        //SELECIONANDO SEÇÃO UTILIZANDO ID (ESCOLHA DO USUÁRIO)
        const secaoEscolha = document.querySelector (`div[data-id = "${id}"]`)

        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar ()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add ("mostrar")
    }
}

//FUNÇÃO PARA REMOVER CLASSES DAS DIVS
function removeClasseMostrar () {
    const divs = document.querySelectorAll (".secaoTransacao .container div")
    
    for (let i = 0; i < divs.length; i++) {

        divs[i].classList.remove ("mostrar")
    }
    
}