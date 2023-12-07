class RenderModule{
    #input = $('#input')
    #display = $('#display')
    #list 

    #wisdomSource = $("#wisdom-template").html();

    #wisdomTemplate = Handlebars.compile(this.#wisdomSource);

    #wisdomListSource = $("#wisdom-list-template").html();

    #wisdomListTemplate = Handlebars.compile(this.#wisdomListSource);

    render(wisdoms){
        this.renderList();
        if(wisdoms.length > 0){
            wisdoms.forEach((wisdom)=>this.renderWisdomFromText(wisdom))
        }else{
            this._clearWisdoms();
        }
    }

    emptyDisplay(){
        this.#display.empty()
    }

    emptyInput() {
        this.#input.val('');
    }

    renderList(){
        const wisdomListHtml = this.#wisdomListTemplate()
        this.#display.append(wisdomListHtml)
        this.#list = $("#wisdom-list")
    }

    renderWisdomFromText(wisdom){
        const widomHtml =this.#wisdomTemplate(wisdom)
        this.#list.append(widomHtml)
    }

    getWisdomInputText(){
      return this.#input.val()
    }

    _clearWisdoms(){
        if(this.#list){
            this.#list.empty();
        }
    }
}