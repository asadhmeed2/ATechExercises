const {
    NameIsNotValidError,
    UserNameIsNotValidError,
    CountryIsNotValidError,
    AgeIsNotValidError,
    UserExistsError,
    UserDoseNotExistError
} = require('./customErrors')

class User {

    validateUserName(userName) {
        if(typeof userName !== 'string' || userName === ''){
            throw new UserNameIsNotValidError();
        }
    }

    validateUser(user){
        
        this.validateUserName(user.username)

        if(typeof user.name !== 'string' || user.name === ''){
            throw new NameIsNotValidError()
        }

        if(typeof user.country !== 'string' || user.country === ''){
            throw new CountryIsNotValidError()
        }

        if(isNaN(+user.age) || user.age === '0'){
            throw new AgeIsNotValidError()
        }

    }

    checkIfExists(username,users){
        const userIdx = users.findIndex(usr=> username === usr.username)
        if(userIdx !== -1){
            throw new UserExistsError()
        }
    }

    checkIfDoseNotExists(username,users){
        const userIdx = users.findIndex(usr=> username === usr.username)
        if(userIdx === -1){
            throw new UserDoseNotExistError()
        }
    }

    getUser(username,users){
        const user = users.find(usr=> username === usr.username)
        return user;
    }




}

const user = new User();

module.exports = user