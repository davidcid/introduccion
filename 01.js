const app = new Vue({
  el: '#app',
  data: {
    saludo: "Soy el ciclo de vida de Vue"
  },
  methods: {
    destruir() {
      this.$destroy();
    }
  },
  computed: {

  },
  beforeCreate() {
    console.log('beforeCreate')
  }
})