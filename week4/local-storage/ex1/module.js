

class WisdomModule{
    #wisdoms =[]
    #localStorageModule

    constructor(localStorage){
        this.#localStorageModule = localStorage;
        WisdomModule.wisdomCount = 0;
    }

    addWisdoms(text){
        const newWisdoms = {id : `${WisdomModule.wisdomCount}` ,text}
        this.#wisdoms.push(newWisdoms);
        if(this.#wisdoms.length % 2 === 0){
            this.#localStorageModule.set(WISDOMS,this.#wisdoms)
        }

        WisdomModule.wisdomCount ++;
        return newWisdoms;
    }

    removeWisdom(id){
        const idx = this.#wisdoms.findIndex(wisdom=>wisdom.id === id)
        this.#wisdoms.splice(idx,  1)
    }

    getWisdoms(){
        return this.#wisdoms
    }

    updateWisdomsFromLocalStorage(){
        const wisdoms = this.#localStorageModule.get(WISDOMS)
        if(!wisdoms){
            return
        }

        WisdomModule.wisdomCount = wisdoms[wisdoms.length-1].id+1

        this.#wisdoms = wisdoms
    }

    clearWisdoms(){
        this.#localStorageModule.clear();
        this.#wisdoms = [];
    }



}