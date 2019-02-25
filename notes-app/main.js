new Vue({
  el: '#app',
  data: {
    activeNote: false,
  	notes: [
      { text: 'This is a first note', favorite: false },
      { text: 'This is a second note', favorite: true }
    ]
  },
  methods: {
    deleteNote() {
      // enkel verwijderen als er een item geselecteerd is
      if (this.activeNote != false) {
        // index van active note opzoeken in notes
        var index = this.notes.indexOf(this.activeNote);
        // active note verwijderen uit notes
        this.notes.splice(index, 1);
        // active note terug leeg maken na verwijderen
        this.activeNote = false;
      }
    }
  }
})
