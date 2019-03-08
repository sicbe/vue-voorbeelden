Vue.component('button-counter', {
  data() {
    return {
      counter: 0
    }
  },
  template: '<button @click="counter++">You clicked me {{ counter }} times</button>'
});

new Vue({
  el: "#app",
  data: {}
});