
const firstTabLink = document.querySelector('#first')
const secondTabLink = document.querySelector('#second')

const firstTab = document.querySelector('#firstTab')
const secondTab = document.querySelector('#secondTab')

firstTab.classList.add('selected')
secondTab.classList.add("hidden")
let lastSelected = firstTab

firstTabLink.addEventListener('click', () =>{
    lastSelected.classList.remove('selected')
    lastSelected.classList.add('hidden')
    firstTab.classList.remove('hidden')
    firstTab.classList.add('selected')
    lastSelected = firstTab
})

secondTabLink.addEventListener('click', () =>{
    lastSelected.classList.remove('selected')
    lastSelected.classList.add('hidden')
    secondTab.classList.remove('hidden')
    secondTab.classList.add('selected')
    lastSelected = secondTab
})