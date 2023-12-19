const {
    NameIsNotValidError,
    UserNameIsNotValidError,
    CountryIsNotValidError,
    AgeIsNotValidError,
    UserExistsError,
} = require('./customErrors')

class User {

    validateUser(user){
        if(typeof user.username !== 'string' || user.username === ''){
            throw new UserNameIsNotValidError();
        }

        if(typeof user.name !== 'string' || user.name === ''){
            throw new NameIsNotValidError()
        }

        if(typeof user.country !== 'string' || user.country === ''){
            throw new CountryIsNotValidError()
        }

        if(typeof  +user.age === NaN || user.age === '0'){
            throw new AgeIsNotValidError()
        }

    }

    checkIfExists(user,users){
        const userIdx = users.findIndex(usr=> user.username === usr.username)
        if(userIdx === -1){
            throw new UserExistsError()
        }
    }



}

const user = new User();

module.exports = user