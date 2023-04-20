// Definizione dell'app Vue
const app = Vue.createApp({
  // Definizione dei dati dell'app
  data() {
    return {
      // Array di contatti, con nome, avatar, visibilità e messaggi
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/img1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2023 15:30:55',
              text: 'Hai mangiato',
              status: 'sent'
            },
            {
              date: '10/01/2023 15:50:00',
              text: 'E tutto nel frigo.',
              status: 'sent'
            },
            {
              date: '10/01/2023 16:15:22',
              text: 'Grazie! Ho gia mangiato tutto.',
              status: 'received'
            },
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/img2.jpg',
          visible: true,
          messages: [
            {
              date: '20/01/2023 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/01/2023 16:30:55',
              text: 'Bene grazie e tu?',
              status: 'received'
            },
            {
              date: '20/01/2023 16:35:00',
              text: 'Bene bene, grazie.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Francesca',
          avatar: 'img/img3.jpg',
          visible: true,
          messages: [
            {
              date: '28/01/2023 10:10:40',
              text: 'Vieni a prenddere un caffe con me e mia mamma?',
              status: 'received'
            },
            {
              date: '28/01/2023 10:20:10',
              text: 'Purtroppo, non posso. Facciamo un altra volta.',
              status: 'sent'
            },
            {
              date: '28/01/2023 16:15:22',
              text: 'Certo, quando vuoi!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: 'img/img4.jpg',
          visible: true,
          messages: [
            {
              date: '20/01/2023 12:20:12',
              text: 'Che tempo fa oggi??',
              status: 'sent'
            },
            {
              date: '20/01/2023 12:50:00',
              text: 'Guarda il meteo.',
              status: 'received'
            }
          ],
        },
      ],
      // Indice del contatto corrente
      currentContact: 0,
    };
  },
  // Definizione delle proprietà calcolate dell'app
  computed: {
    // Contatti filtrati in base alla stringa di ricerca
    filteredContacts() {
      return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  // Definizione dei metodi dell'app
  methods: {
    // Imposta l'indice del contatto corrente
    setIndexContact(index) {
      this.currentContact = index;
    },
  }
});

// Montaggio all´id #app
app.mount('#app');
