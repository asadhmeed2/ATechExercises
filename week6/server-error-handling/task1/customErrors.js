class UserNameIsNotValidError extends Error {
    message='username is required or not a valid username'
}

class CountryIsNotValidError extends Error {
    message='country is required or not a valid'
}

class NameIsNotValidError extends Error {
    message='name is required or not valid'
}

class AgeIsNotValidError extends Error {
    message='Age must be a number'
}

class UserExistsError extends Error {
    message='User Already Exists'
}

class UserDoseNotExistError extends Error {
    message='User Dose Not Exists'
}

module.exports = {
    UserNameIsNotValidError,
    CountryIsNotValidError,
    NameIsNotValidError,
    AgeIsNotValidError,
    UserExistsError,
    UserDoseNotExistError
}