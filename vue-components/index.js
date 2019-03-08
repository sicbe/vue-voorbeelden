Vue.component('button-counter', {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++;
      this.$emit('increase');
    }
  },
  template: `
    <button @click="increaseCounter">
      <likes v-bind:count="counter"></likes>
    </button>
  `
});

Vue.component('blog-post', {
  props: ['post'],
  data() {
    return {}
  },
  template: `
    <article class="article-teaser">
      <small>Post with id: {{ post.id }}</small>
      <h1>{{ post.title }}</h1>
      <likes v-bind:count="post.likes"></likes>
    </article>
  `
});

Vue.component('likes', {
  props: ['count'],
  template: `<p>This item has {{ count }} likes.</p>`
});


new Vue({
  el: "#app",
  data: {
    totalClicks: 0,
    blogposts: [
      {id: 1, title:'Eerste post', likes: 5 },
      {id: 2, title: 'Tweede post', likes: 10 },
      {id: 3, title: 'Derde post', likes: 15 },
      {id: 4, title: 'Vierde post', likes: 3 },
    ]
  }
});