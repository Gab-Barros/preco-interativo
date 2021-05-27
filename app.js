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

      if (telaMobile.matches) {
        track.style.width = `calc(${this.slide}*2.47px)`;
      } else track.style.width = `calc(${this.slide}*3.8px)`;
    },
  },
});
