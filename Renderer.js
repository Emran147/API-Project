class Renderer {
    constructor(containerId, templateId) {
      this.container = $(`#${containerId}`)
      this.template = $(`#${templateId}`).html()
  
      if (!this.container.length || !this.template) {
        throw new Error('Container or template ID not found.')
      }
    }
  

    render(dataObj) {
      try {
        this.clearContainer()
        const compiledTemplate = Handlebars.compile(this.template);
          const renderedHTML = compiledTemplate({
          data: dataObj.friendsList,
          person: dataObj.firstPerson,
          quote: dataObj.quoteData , 
          pokemon : dataObj.pokemonObj,
          bacon : dataObj.baconData
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
  