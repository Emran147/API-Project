const dataArrange = new dataManager
const urlManager = new urls

const refresh = function(){
  const apiManager = new ApiManager(urlManager.getUserURL(),urlManager.getQuoteURL(),urlManager.getPokemonURL(),urlManager.getBaconURL())
  Promise.all([apiManager.userDataFunc(), apiManager.quoteDataFunc(),apiManager.pokemonDataFunc(),apiManager.baconDataFunc()])
  .then(([userData, quoteData ,pokemonData,baconData]) => {
    let dataObj =  dataArrange.createDataObj(userData, quoteData ,pokemonData,baconData)
    const renderer = new Renderer('container', 'friends-template')
    renderer.render(dataObj)
  })
  .catch(error => {
      console.error('Error fetching data:', error)
  })
   
}
refresh() 