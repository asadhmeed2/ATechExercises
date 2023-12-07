const localStorageModule = new LocalStorageModule(); 
const renderModule = new RenderModule()
const wisdomModule = new WisdomModule(localStorageModule);

// localStorageModule.clear()

wisdomModule.updateWisdomsFromLocalStorage();


const render = function(){
    renderModule.emptyDisplay();
    renderModule.render(wisdomModule.getWisdoms());
}

const addWisdom = function(){
    const text = renderModule.getWisdomInputText()
    renderModule.emptyInput();

    const wisdom = wisdomModule.addWisdoms(text);
    renderModule.renderWisdomFromText(wisdom);
}

const removeWisdom = function(e){
    wisdomModule.removeWisdom(e.target.id);
    render();
}

const clearWisdoms = function(){
    wisdomModule.clearWisdoms();
    render();
}

render()
