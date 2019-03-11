
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
