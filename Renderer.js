class Renderer {
    constructor(containerId, templateId) {
      this.container = $(`#${containerId}`)
      this.template = $(`#${templateId}`).html()
  
      if (!this.container.length || !this.template) {
        throw new Error('Container or template ID not found.')
      }
    }
      render(dataObj,storedArray) {

        let savedUsersTitle 
        if (storedArray!=null){
          savedUsersTitle = 'Saved Users '
        }
        else{
          savedUsersTitle = ' Save Users To see Them Here '
        }
        
      try {
        this.clearContainer()
        const compiledTemplate = Handlebars.compile(this.template);
          const renderedHTML = compiledTemplate({
          data: dataObj.friendsList,
          person: dataObj.firstPerson,
          quote: dataObj.quoteData , 
          pokemon : dataObj.pokemonObj,
          bacon : dataObj.baconData,
          storedArray : storedArray,
          savedUsersTitle : savedUsersTitle
        });
  
        this.container.html(renderedHTML)
      } catch (error) {
        console.error('Rendering error:', error)
      }
    }
      clearContainer() {
      this.container.empty()
    }
  }
  