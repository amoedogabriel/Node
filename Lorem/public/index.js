
function gerarParagrafos() {
  var quantidade = document.getElementById("quantidade").value;
  var resultado = document.getElementById("resultado");

  // Limpa o resultado anterior
  resultado.innerHTML = "";

  for (var i = 0; i < quantidade; i++) {
    var paragrafo = document.createElement("p");
    paragrafo.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper pellentesque lectus vitae aliquam. Nullam tempus tincidunt tristique. Sed vel lacinia justo. Nunc eu magna ac dui mattis aliquet. Proin at orci sed sem aliquam gravida. Suspendisse eu luctus lacus. Vestibulum in cursus elit, ac laoreet eros. Fusce nec dolor non odio condimentum iaculis. Integer hendrerit arcu dolor, non rhoncus tortor commodo eu. Suspendisse vitae felis non lacus rhoncus cursus at ac metus. Suspendisse potenti. Quisque non mauris nec nisl interdum pellentesque. Quisque commodo libero eu lacinia sagittis.";

    resultado.appendChild(paragrafo);
  }
}







