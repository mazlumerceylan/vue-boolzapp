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
      // Imposta il testo del nuovo messaggio
      messageText: ''
    };
  },
  computed: {
    // Definizione della computed property 'filteredContacts'
    filteredContacts() {
      // La computed property restituisce l'array di oggetti 'contacts'
      return this.contacts;
    }
  },
  methods: {
    // Definizione del method 'setIndexContact' che imposta l'indice del contatto corrente
    setIndexContact(index) {
      this.currentContact = index;
    },
    // Definizione del method 'newMessage' che aggiunge un nuovo messaggio all'oggetto contatto corrente
    newMessage(index) {
      // Verifica se la stringa di testo del messaggio non è vuota
      if (this.messageText.trim() !== '') {
        // Creazione di un nuovo oggetto messaggio
        const newMsg = {
          text: this.messageText,
          date: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
          status: 'sent'
        };
        // Aggiunta del nuovo oggetto messaggio all'array 'messages' dell'oggetto contatto corrente
        this.contacts[index].messages.push(newMsg);
        // Reset della stringa di testo del messaggio
        this.messageText = '';
      }
    }
  }
});
  // Montaggio dell'app Vue nell'elemento con id 'app'
  app.mount('#app');
  

