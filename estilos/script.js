let comidaEscolhida = null, bebidaEscolhida = null, sobremesaEscolhida = null;
let precoComida, precoBebida, precoSobremesa, precoTotal;
let nomeComida, nomeBebida, nomeSobremesa;


//seleção de comidas
function selecionarPrato(opcaoComida) {
  if(comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado");
    comidaEscolhida.getElementsByTagName("img")[1].classList.add("escondido");
  }
 
  opcaoComida.classList.add("selecionado");
  opcaoComida.getElementsByTagName("img")[1].classList.remove("escondido") 
  comidaEscolhida = opcaoComida;
  finalizarSelecao();
}

//seleção de bebidas
function selecionarBebida(opcaoBebida) {
  if(bebidaEscolhida !== null) {
    bebidaEscolhida.classList.remove("selecionado");
    bebidaEscolhida.getElementsByTagName("img")[1].classList.add("escondido");
  }

  opcaoBebida.classList.add("selecionado");
  opcaoBebida.getElementsByTagName("img")[1].classList.remove("escondido") 
  bebidaEscolhida = opcaoBebida;
  finalizarSelecao();
}

//seleção de sobremesas
function selecionarSobremesa(opcaoSobremesa) {
  if(sobremesaEscolhida !== null) {
    sobremesaEscolhida.classList.remove("selecionado");
    sobremesaEscolhida.getElementsByTagName("img")[1].classList.add("escondido");
  }

  opcaoSobremesa.classList.add("selecionado");
  opcaoSobremesa.getElementsByTagName("img")[1].classList.remove("escondido") 
  sobremesaEscolhida = opcaoSobremesa;
  finalizarSelecao();
}

//Liberar botão de finaizar
function finalizarSelecao() {
  if(comidaEscolhida !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null){
    document.querySelector(".finalizar").classList.remove("escondido");
  }
}

//Resumo do pedido