// Desenvolvido por Gabriel Barros

const vm = new Vue({
  el: '#app',
  data: {
    slide: null,
  },
  watch: {
    slide(){
      const track = document.querySelector('.bgSlide')
      track.style.width = `calc(${this.slide}*3.8px)`
    }
  }
})