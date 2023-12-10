class ApiManager {
    constructor(userAPI,quoteAPI,pokemonAPI,baconAPI) {
        this.userAPI=userAPI
        this.quoteAPI=quoteAPI
        this.pokemonAPI=pokemonAPI
        this.baconAPI=baconAPI
        }
    userDataFunc() {
        const APIResponse =  $.get(this.userAPI)
        return APIResponse
    }

    quoteDataFunc(){
        const APIResponse =  $.get(this.quoteAPI)
        return APIResponse
    }

    pokemonDataFunc(){
        const APIResponse =  $.get(this.pokemonAPI)
        return APIResponse
    }

    baconDataFunc(){
        const APIResponse =  $.get(this.baconAPI)
        return APIResponse
    }

    
}

