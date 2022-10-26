/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Sono Matteo, studente di Classe 72'
      }
    }
  }).mount('#app')