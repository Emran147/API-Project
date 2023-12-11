const dataArrange = new dataManager
const urlManager = new urls

const refresh = function(){
  const apiManager = new ApiManager(urlManager.getUserURL(),urlManager.getQuoteURL(),urlManager.getPokemonURL(),urlManager.getBaconURL())
  Promise.all([apiManager.userDataFunc(), apiManager.quoteDataFunc(),apiManager.pokemonDataFunc(),apiManager.baconDataFunc()])
  .then(([userData, quoteData ,pokemonData,baconData]) => {
    let storedArray = JSON.parse(localStorage.getItem('savedUsers'));
    let dataObj =  dataArrange.createDataObj(userData, quoteData ,pokemonData,baconData)
    renderFunc(dataObj,storedArray)
  })
  .catch(error => {
      console.error('Error fetching data:', error)
  })
   
}
refresh() 

const renderFunc = function(dataObj,storedArray){
  const renderer = new Renderer('container', 'friends-template')
  renderer.render(dataObj,storedArray)
}


const saveUser = function(){
  const myArray = JSON.parse(localStorage.getItem("savedUsers")) || [];
  if(myArray.length==0 || myArray[myArray.length - 1].firstPerson.name.first !== dataArrange.getUserInfo().firstPerson.name.first){
    myArray.push(dataArrange.getUserInfo());
    localStorage.setItem("savedUsers", JSON.stringify(myArray));
    renderFunc(dataArrange.getUserInfo(), myArray);
  }
  else{
    alert('already saved ')
  }
}


const clearTheList = function(){
  localStorage.removeItem("savedUsers");
  renderFunc(dataArrange.getUserInfo(), null);
}


const getTheSavedUser = function(name){
  const myArray = JSON.parse(localStorage.getItem("savedUsers"))

  let userToShow 
  myArray.forEach(element => {
    if(element.firstPerson.name.first==name){
      userToShow=element
    }
  })
  let storedArray = JSON.parse(localStorage.getItem('savedUsers'));
  renderFunc(userToShow,storedArray)  
}


