new Vue({
  el: '#app',
  data: {
    show: 'all',
    activeNote: false,
  	notes: [
      { text: 'This is a first note', favorite: false },
      { text: 'This is a second note', favorite: true }
    ]
  },
  methods: {
    addNote() {
      // lege note in active Note steken
      this.activeNote = { text:'', favorite:false };
      // activeNote pushen naar notes array
      this.notes.push(this.activeNote);
      // focus op textarea na toevoegen
      document.getElementById('activeNote').focus();
    },
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
  },
  computed: {
    filteredNotes() {
      // show == all
      if (this.show=='all') {
        // return alle notes
        return this.notes;
      } else {
        // show === favorites
        // return alleen notes met favorite=true
        return this.notes.filter(note => note.favorite);
      }
    }
  }
})
