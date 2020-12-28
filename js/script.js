// collego il codice di Vue all'html
const templatesApp = new Vue ({
  el: "#general-container",
  data: {
    // contenente il template per ogni cliente (ogni cliente è un oggetto con determinate proprietà)
    templateClientArray: [],
    // per recuperare nome e congnome, scritto nell'input text del rispettivo utente
    name: "",
    // relativo alla funzione fil, inserito in ogni client, vedi clientCounter
    counter: 0,
    // per recuperare il booleano delle select, e relative options; relativo alla funzione parFil, inserito in ogni client, vedi clientPar e clientOptions
    par: ["", "", "", "", "", "", "", "", "", ""],
    options: [
      { text: 'SÌ', value: 'X' },
      { text: 'NO', value: '' }
    ],
    // array conteneti contatori, variano in base al valore assunto da par (più specificatamente, clientPar); relativo alla funzione parFil 
    parCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  methods: {
    // funzione che aggiunge un template e una riga di recap per ogni cliente; il template è un oggetto con le relative proprietà
    add: function() {
      this.templateClientArray.push({
        clientName: this.name,
        clientPar: [this.par[0], this.par[1], this.par[2], this.par[3], this.par[4], this.par[5], this.par[6], this.par[7], this.par[8], this.par[9]],
        clientOptions: this.options,
        clientCounter: this.counter
      });
    },
    // cancella un template e la relativa riga di recap del cliente
    del: function(index) {
      this.templateClientArray.splice(index, 1);
    },
    // funzione volta a determinare quanti parametri si manifestano per ogni cliente
    fil: function(client, index) {
      if (client.clientPar[index] == "X") {
        client.clientCounter += 1;
      } else  {
        client.clientCounter -= 1;
      }
    },
    // funzione volta a determinare quante volte un determinato parametro si è manifestato, per la totalità dei clienti
    parFil: function(client, index) {
      if (client.clientPar[index] == "X") {
        this.parCount[index] += 1;
      } else {
        this.parCount[index] -= 1;
      }
    }
  }
});
