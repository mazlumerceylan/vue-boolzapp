Tecnologie utilizzate

-HTML -CSS -JavaScript -Vue.js -Day.js

======

Struttura del codice

Il codice è organizzato in modo da separare la logica di presentazione dalla logica di gestione dei dati, utilizzando il framework Vue.js. Il file HTML definisce la struttura del markup, mentre lo stile viene definito nel file CSS. La logica di gestione dei dati viene gestita nel file JavaScript.

=======

Spiegazione del codice

Sezione sinistra -La sezione sinistra è definita all'interno dell'elemento "l-side". -La barra di navigazione utente contiene l'immagine del profilo e il nome utente. -La sezione delle notifiche contiene un'icona di campana disattivata e un messaggio di attivazione delle notifiche. –La sezione di ricerca chat contiene un'icona di ricerca e un campo di input di testo. -La lista dei contatti è definita all'interno dell'elemento "contact-list". -La lista dei contatti è generata dinamicamente utilizzando l'attributo "v-for" di Vue.js. -Ogni contatto nella lista dei contatti mostra l'immagine del profilo del contatto, il nome del contatto e l'ultimo messaggio inviato dal contatto. -L'ultimo messaggio inviato viene recuperato dal primo elemento dell'array dei messaggi associati a ciascun contatto.

====

Sezione destra -La sezione destra è definita all'interno dell'elemento "r-side". -La barra di navigazione del contatto contiene l'immagine del profilo del contatto, il nome del contatto e l'ultimo accesso. -La sezione di ricerca messaggi contiene un'icona di ricerca, un'icona di allegato e un'icona di opzioni. -La finestra di conversazione è definita all'interno dell'elemento "message-area". -La finestra di conversazione è vuota di default e verrà popolata con i messaggi una volta selezionato un contatto. -La sezione di input del testo contiene un'icona di smiley, un campo di input di testo e un'icona di microfono.

==============

Milestone-1:

Questo codice rappresenta un'applicazione web basata su Vue.js che visualizza una lista di contatti e permette di selezionarne uno per visualizzare la conversazione associata.

La logica è implementata attraverso l'utilizzo della funzione Vue.createApp() che definisce l'applicazione e la funzione data() che definisce l'oggetto contacts. L'oggetto contacts rappresenta un array di contatti, ognuno dei quali è composto da un nome, un'immagine di avatar, una flag visible che determina se il contatto è visualizzabile o meno e un array di messaggi. Ogni messaggio è caratterizzato da una data, un testo e uno stato (sent o received).

Viene inoltre definita la proprietà currentContact, inizializzata a 0, che rappresenta l'indice del contatto selezionato.

Attraverso la funzione computed viene definito un array di contatti filtrati in base alla stringa di ricerca search.

La funzione methods definisce una funzione setIndexContact() che cambia l'indice del contatto corrente.

Infine, viene montata l'applicazione sulla sezione HTML con l'ID app.

Passaggi:

-Definizione dell'applicazione Vue.js con Vue.createApp(). -Definizione dell'oggetto data() con l'array contacts e la proprietà currentContact. -Definizione della funzione computed che filtra i contatti in base alla stringa di ricerca search. -Definizione della funzione methods che cambia l'indice del contatto corrente. -Montaggio dell'applicazione sulla sezione HTML con ID app.

============

Milestone-2

-Aggiungo un elemento HTML nel template Vue che rappresenti la lista dei contatti. All'interno di questo elemento, uso la direttiva v-for per ciclare attraverso l'array di contatti e visualizzarli. Aggiungo un evento di click su ciascun elemento della lista che richiama il metodo setIndexContact con l'indice del contatto come argomento. -Aggiungo un altro elemento HTML nel template Vue che rappresenti il pannello della conversazione. All'interno di questo elemento, uso la direttiva v-for per ciclare attraverso l'array di messaggi del contatto attivo e visualizzarli. -Nel metodo setIndexContact, imposto la proprietà currentContact al valore dell'indice del contatto passato come argomento. Questo renderà il contatto attivo all'interno del pannello della conversazione. -Nel metodo newMessage, creo un nuovo oggetto messaggio con il testo dell'input, la data corrente e lo stato "sent". Aggiungo questo oggetto all'array di messaggi del contatto attivo e reimposto il testo dell'input a una stringa vuota. Per visualizzare la conversazione del contatto clicco, aggiungo una computed property chiamata currentMessages che restituisce l'array di messaggi del contatto attivo. Utilizzo questa proprietà invece dell'array di messaggi direttamente nella direttiva v-for all'interno del pannello della conversazione.

===========

Milestone-3

-Aggiungo un campo di input in cui l'utente può inserire il testo del messaggio da inviare. -Aggiungo un evento "keydown" sull'input del messaggio in modo da rilevare quando l'utente preme il tasto "enter". -Quando l'utente preme "enter", il testo del messaggio deve essere aggiunto all'array "messages" dell'oggetto "contacts" corrispondente all'indice corrente, insieme ad una proprietà "status" impostata su "sent". -Il campo di input del messaggio deve essere azzerato dopo l'invio del messaggio. -Dopo l'invio del messaggio, deve essere visualizzata una risposta di "Ok" dall'interlocutore corrispondente dopo 1 secondo. -Per visualizzare il messaggio come messaggio verde nell'interfaccia utente, è necessario aggiungere una logica adeguata che applichi uno stile CSS differente per i messaggi inviati e quelli ricevuti.

=============

milestone-4

-La funzione di ricerca degli utenti è stata implementata utilizzando un metodo computed all'interno di Vue.js che filtra gli utenti in base al nome inserito dall'utente nell'input. -Il metodo computed restituisce una lista di contatti che contengono nel nome le lettere inserite dall'utente. Questa lista viene poi utilizzata per visualizzare solo i contatti che corrispondono alla ricerca effettuata. -Il metodo filter applicato all'array contacts restituisce un nuovo array contenente solo gli oggetti che soddisfano la condizione specificata, in questo caso gli oggetti il cui nome contiene le lettere inserite dall'utente.