
//Componenti

Vue.component('school',{
  template: `<h1>Boolean main topics are:</h1>`
})


//COMPONENTE TOPICS
//Questo componente passa dei dati a topic
Vue.component('topics', {
  template: `<div>
                <ul>
                  <topic v-for='topic in topics' :key='topic.id'>{{ topic.name }}</topic>
                </ul>
              </div>
            `,
  data() {
    return {
      topics:[
        {id: 1, name: 'PHP'},
        {id: 2, name: 'JAVASCRIPT'},
        {id: 3, name: 'LARAVEL'},
        {id: 4, name: 'VUE'},
        {id: 5, name: 'JQUERY'}
      ]
    }
  }

})

//COMPONENTE TOPIC SINGOLO
//i tag slot mostrano il dato immesso all'interno di questo componente
//richiamato dal padre
Vue.component('topic', {
  template: `
            <li><slot></slot></li>
              `
})



//Linkare il container principale nella pagina

const app = new Vue({
  el: '#app', //l'elemento linkato
  data: { //l'oggetto che contiene la base dati
    title: 'First steps with Vue',
    likeVue: true,
    vueDocs: 'https://vuejs.org/v2/guide/',
    newFavFeature: '',
    favouriteFeatures: ['lightweight'],
    buttonsBg: 'yellow',
  },
  methods: {
    addFeature(){
      this.favouriteFeatures.push(this.newFavFeature)
      this.newFavFeature = ''
    },
    clearFeatures(){
      this.favouriteFeatures = []
    }
  },
  computed: {
    uppercaseTitle(){
      //always make title uppercase
      return this.title.toUpperCase()
    }
  }

})
