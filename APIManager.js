class ApiManager {
    constructor(userAPI,quoteAPI,pokemonAPI,baconAPI) {
        this.userAPI=userAPI
        this.quoteAPI=quoteAPI
        this.pokemonAPI=pokemonAPI
        this.baconAPI=baconAPI
        }
    userDataFunc() {
        return   $.get(this.userAPI)
        
    }

    quoteDataFunc(){
        return  $.get(this.quoteAPI)
        
    }

    pokemonDataFunc(){
        return  $.get(this.pokemonAPI)
        
    }

    baconDataFunc(){
        return  $.get(this.baconAPI)
      
    }

    
}

