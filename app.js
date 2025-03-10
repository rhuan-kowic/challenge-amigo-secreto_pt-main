//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

const adicionarAmigo = () => {
  const nome = document.getElementById("amigo").value;
  if (nome != "") {
    amigos.push(nome);
  } else {
    alert("Por favor, insira um nome.");
  }
  document.getElementById("amigo").value = "";
  atualizarLista();
};

const atualizarLista = () => {
  lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (i in amigos) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
};

const sortearAmigo = () => {
  document.getElementById("resultado").innerHTML = "";

  if (amigos.length > 0) {
    const numero = Math.floor(Math.random() * amigos.length);
    document.getElementById(
      "resultado"
    ).innerHTML = `O amigo secreto é: ${amigos[numero]}`;
  } else {
    alert("Não há amigos para sortear. Adicione alguns!");
  }
};
