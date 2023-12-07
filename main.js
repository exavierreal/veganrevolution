function obterTamanhoDaTela() {
    // Obtém as dimensões da janela visível
    var larguraDaJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var alturaDaJanela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Exibe as dimensões no formato "widthxheight"
    console.log(larguraDaJanela + "x" + alturaDaJanela);
  }

  // Chama a função ao carregar a página e ao redimensionar a janela
  window.onload = obterTamanhoDaTela;
  window.onresize = obterTamanhoDaTela;