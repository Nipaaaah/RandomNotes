var notes = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B"
];

var accords = [
  "Gamme majeur",
  "Gamme Dorien",
  "Penta Majeur",
  "Penta mineur",
  "Triade maj",
  "Triade min",
  "Triade dim",
  "Triade aug",
  "M7",
  "7",
  "-7",
  "-M7",
  "-7 5b",
  "o7",
  "sus2",
  "sus4",
  "sus",
  "Voicing fermé -9",
  "Voicing fermé 9",
  "Voicing fermé M9",
  "Voicing ouvert -9",
  "Voicing ouvert 9",
  "Voicing ouvert M9"
];

function getRandom() {
  var randomNote = Math.floor(Math.random() * Math.floor(notes.length));
  var randomAccord = Math.floor(Math.random() * Math.floor(accords.length));
  document.getElementById("note").innerHTML = notes[randomNote];
  document.getElementById("accord").innerHTML = accords[randomAccord];

  //C'est ici qu'on change le timer -- 1s = 1000
  window.setInterval(function(){
    getRandom()
  }, 20000)
}
