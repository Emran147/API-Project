class urls {

    getUserURL(){
        return 'https://randomuser.me/api/?results=7'
    }

    getQuoteURL(){
        return "https://api.kanye.rest"
    }

    getBaconURL(){
        return "https://baconipsum.com/api/?type=meat-and-filler"
    }

    getPokemonURL(){
        return `https://pokeapi.co/api/v2/pokemon/${dataArrange.getRandomNum()}/`
    }
    
}