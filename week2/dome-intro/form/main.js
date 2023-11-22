const NAME_MAX_LENGTH = 2
const PHONE_MAX_LENGTH = 10
const MAX_SALARY = 16000
const MIN_SALARY = 10000


const form = {
    name:null,
    phone:null,
    salary:null,
    birthday:null
}

const error = document.querySelector('#error')

function onInputChange(event){
    form[event.target.id] = event.target.value
}

function onSubmit(){
    if(!form.name || form.name.length <= NAME_MAX_LENGTH){
        error.innerHTML = `name must be at least ${NAME_MAX_LENGTH} in length`
        return
    }
    
    if(!form.phone || form.name.length <= PHONE_MAX_LENGTH){
        error.innerHTML = `phone number must be at least ${PHONE_MAX_LENGTH} in length`
        return
    }
    
    if(!form.name || (parseInt( form.salary) <= MAX_SALARY && parseInt(form.salary) >= MIN_SALARY)){
        error.innerHTML = `salary must be at least ${MIN_SALARY} and at most ${MAX_SALARY}`
        return
    }
    
    if(!form.birthday){
        error.innerHTML = `birthday is requred`
        return
    }
}


