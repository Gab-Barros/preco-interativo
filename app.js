const vm = new Vue({
  el: "#app",
  data: {
    slide: 50,
    ativo: false,
  },
  watch: {
    slide() {
      const track = document.querySelector(".bgSlide");
      const telaMobile = window.matchMedia("(max-width: 450px)");

      // o seguinte código aumenta ou diminui o span bgSlide conforme o tamanho
      // da tela, criando a 'parte' verde do input range à esquerda da thumb
      if (telaMobile.matches) {
        track.style.width = `calc(${this.slide}*2.1px)`;
      } else track.style.width = `calc(${this.slide}*3.4px)`;
    },
  },
});
