function criptografarTexto() {
  const textoDeEntrada = document.getElementById("textoInput").value;
  
  const textoMinusculo = textoDeEntrada.toLowerCase();

  let textoSemSinais;

  let textoCriptografado = [];

  for (let i = 0; i < textoMinusculo.length; i++) {
    textoSemSinais = textoMinusculo[i]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (textoSemSinais == "a") {
      textoCriptografado.push("ai");
    } else if (textoSemSinais == "e") {
      textoCriptografado.push("enter");
    } else if (textoSemSinais == "i") {
      textoCriptografado.push("imes");
    } else if (textoSemSinais == "o") {
      textoCriptografado.push("ober");
    } else if (textoSemSinais == "u") {
      textoCriptografado.push("ufat");
    } else {
      textoCriptografado.push(textoSemSinais);
    }
  }

  textoCriptografado = textoCriptografado.join("");

  document.getElementById("section-sem-resultado").style.display = "none";
  document.getElementById("section-resultado").style.display = "inline";

  document.getElementById("resultadoTexto").textContent = textoCriptografado;
}

function descriptografarTexto() {
  const textoIncriptografado = document.getElementById("textoInput").value;

  const texto = textoIncriptografado.toLowerCase();

  let novoTexto = [];
  let puloDeIndice = 0;

  for (let i = 0; i < texto.length; i++) {
    if (puloDeIndice > 0) {
      puloDeIndice--;
      continue;
    }

    novoTexto.push(texto[i]);

    if (texto[i] === "a") {
      puloDeIndice = 1;
    } else if (texto[i] === "e") {
      puloDeIndice = 4;
    } else if (texto[i] === "i") {
      puloDeIndice = 3;
    } else if (texto[i] === "o") {
      puloDeIndice = 3;
    } else if (texto[i] === "u") {
      puloDeIndice = 3;
    }
  }
  const textoDescriptografada = novoTexto.join("");
  document.getElementById("resultadoTexto").textContent = textoDescriptografada;

  document.getElementById("section-sem-resultado").style.display = "none";
  document.getElementById("section-resultado").style.display = "inline";
}

function copiar() {
  const copiarTexto = document.querySelector("#resultadoTexto");
  copiarTexto.select();
  document.execCommand("copy");

  document.getElementById("section-sem-resultado").style.display = "inline";
  document.getElementById("section-resultado").style.display = "none";
}
