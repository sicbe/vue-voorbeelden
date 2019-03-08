Vue.component('volume-control', {
  template: `
    <p>
      <button @click="volumeUp"> + </button> 
      <button @click="volumeDown"> - </button> 
    </p>
  `,
  methods: {
    volumeUp() {
      this.volume++;
      this.$emit('increased')
    },
    volumeDown() {
      this.volume--;
      this.$emit('decreased')
    }
  }
})