let comidaEscolhida = null, bebidaEscolhida = null, sobremesaEscolhida = null;
let precoComida, precoBebida, precoSobremesa, precoTotal;
let nomeComida, nomeBebida, nomeSobremesa;

//função para separar somente os números do preco
function numerosPreco(string) {
    let numsStr = string.replace(/[^0-9]/g,'')
    return parseInt(numsStr);
}

//Converter e somar os preços
function converteSoma() {
  precoComida = comidaEscolhida.querySelector(".preco").innerText;
  precoBebida = bebidaEscolhida.querySelector(".preco").innerText;
  precoSobremesa = sobremesaEscolhida.querySelector(".preco").innerText;

  let soma = numerosPreco(precoComida) + numerosPreco(precoBebida) + numerosPreco(precoSobremesa)  ;
  precoTotal = (soma/100).toFixed(2);

  nomeComida = comidaEscolhida.querySelector(".titulo").innerText;
  nomeBebida = bebidaEscolhida.querySelector(".titulo").innerText;
  nomeSobremesa = sobremesaEscolhida.querySelector(".titulo").innerText;
}

//seleção de comidas
function selecionarPrato(opcaoComida) {
  if(comidaEscolhida !== null) {
    comidaEscolhida.classList.remove("selecionado");
    comidaEscolhida.querySelector(".icone").classList.add("escondido");
  }
 
  opcaoComida.classList.add("selecionado");
  opcaoComida.querySelector(".icone").classList.remove("escondido") 
  comidaEscolhida = opcaoComida;
  finalizarSelecao();
}

//seleção de bebidas
function selecionarBebida(opcaoBebida) {
  if(bebidaEscolhida !== null) {
    bebidaEscolhida.classList.remove("selecionado");
    bebidaEscolhida.querySelector(".icone").classList.add("escondido");
  }

  opcaoBebida.classList.add("selecionado");
  opcaoBebida.querySelector(".icone").classList.remove("escondido") 
  bebidaEscolhida = opcaoBebida;
  finalizarSelecao();
}

//seleção de sobremesas
function selecionarSobremesa(opcaoSobremesa) {
  if(sobremesaEscolhida !== null) {
    sobremesaEscolhida.classList.remove("selecionado");
    sobremesaEscolhida.querySelector(".icone").classList.add("escondido");
  }

  opcaoSobremesa.classList.add("selecionado");
  opcaoSobremesa.querySelector(".icone").classList.remove("escondido") 
  sobremesaEscolhida = opcaoSobremesa;
  finalizarSelecao();
}

//Liberar botão de finaizar
function finalizarSelecao() {
  if(comidaEscolhida !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null){
    document.querySelector(".finalizar").classList.remove("escondido");
  }
}

//Finalização do pedido
function finalizarPedido() {
  converteSoma();
  let nome = prompt('Qual seu nome?');
  let end = prompt('Endereço: ');
  let mensagem = `Olá gostaria de fazer o pedido:%0a- Prato: ${nomeComida}%0a- Bebida: ${nomeBebida}%0a- Sobremesa: ${nomeSobremesa}%0aPreço: R$${precoTotal}%0a%0aNome: ${nome}%0aEndereço: ${end}`;
  window.open("https://wa.me/+5544998164003?text=" + mensagem);
}