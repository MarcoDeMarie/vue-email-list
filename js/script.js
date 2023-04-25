const {createApp} = Vue;

createApp({


  data(){
    return{
      mail: '',
      url:'https://flynn.boolean.careers/exercises/api/random/mail?items=10',
    }

  },
  methods:  {
    getApi(){
      axios.get(this.url)
      .then((result) =>{
        this.mail = result.data.response
      })

    }
  },

  mounted(){
    this.getApi();
  }


}).mount('#app')