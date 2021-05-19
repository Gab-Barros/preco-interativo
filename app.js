// Desenvolvido por Gabriel Barros

const vm = new Vue({
  el: '#app',
  data: {
    slide: 50,
    ativo: false
  },
  watch: {
    slide(){
      const track = document.querySelector('.bgSlide')
      track.style.width = `calc(${this.slide}*3.8px)`
    }
  },
})