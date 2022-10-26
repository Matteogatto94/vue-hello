const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Sono Matteo, studente di classe 72',
        url: 'https://picsum.photos/300/200'
      }
    }
  }).mount('#app')