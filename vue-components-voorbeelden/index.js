Vue.component('message-list', {
  props: ['messages'],
  template: `
    <div class="message-list">
      <h2>Messages</h2>
      <message
        v-for="message in messages"
        v-bind:message="message"
      ></message>
    </div>
  `
});

Vue.component('message', {
  props: ['message'],
  template: `
    <article class="message">
      <star v-bind:starred="message.starred"></star>
      {{ message.text }}
    </article>
  `
});

Vue.component('star', {
  props: ['starred'],
  methods: {
    change() {
      this.starred = !this.starred;
      this.$emit('changed', this.starred);
    }
  },
  template: `
    <span @click="change">
      <span v-if="starred">&starf;</span>
      <span v-else>&star;</span>
    </span>
  `
});

Vue.component('message-box', {
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    addMessage() {
      this.$emit('add', {
        text: this.newMessage,
        starred: 0
      });
      this.newMessage = '';
    }
  },
  template: `
    <div class="message-box">
      <input @keydown.enter="addMessage" v-model="newMessage"> 
      <button @click="addMessage">Add message</button>
    </div>
  `
});

new Vue({
  el: "#app",
  data: {
    messages: [
      { 
        text:'First message', 
        starred: 0 
      },
      {
        text: 'Second message',
        starred: 1
      },
      {
        text: 'Third message',
        starred: 0
      },
    ]
  },
  methods: {
    saveMessage(message) {
      this.messages.push(message)
    }
  }
});

