
class dataManager {
  constructor(){
    this.userInfo={}
  }

    getRandomNum(){
        let randomNumber = Math.floor(Math.random() * 949) + 1;
        return randomNumber
      }
      
    pokemonFunc(pokemonData){
        let pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
         let pokemonObj = 
        {
          name : pokemonName , 
          picURL : pokemonData.sprites.front_default
        }
        



        return pokemonObj
      }
      
    friendsListFunc(userData){
        const friendsList = userData.results.slice(1)
        return friendsList
      }
      
    firstPersonFunc(userData){
        const mainPerson = [userData.results[0]]
        return mainPerson[0]
     }

    createDataObj(userData, quoteData ,pokemonData , baconData  ){

        let dataObj = {
            friendsList : this.friendsListFunc(userData),
            firstPerson : this.firstPersonFunc(userData),
            pokemonObj : this.pokemonFunc(pokemonData),
            quoteData : quoteData,
            baconData : baconData[0],
          }
        this.userInfo=dataObj  
        return dataObj
    }
    
    getUserInfo(){return this.userInfo} 
 
}

