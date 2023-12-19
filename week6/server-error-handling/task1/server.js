const express = require('express');
const app = express();

const userModal = require('./user') 

const {UserExistsError,UserDoseNotExistError} = require('./customErrors')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]

const PORT = 3000;


app.get('/users', function (req, res) {
    res.send(users)
})

// ex2
app.get('/users/:username', function (req, res) {
    const username = req.params.username
    try{
        userModal.validateUserName(username);
        userModal.checkIfDoseNotExists(username,users);
        const user = userModal.getUser(username,users);

        return res.status(200).send(user);
    }catch(e){
        if(e instanceof UserDoseNotExistError){
            return res.status(404).send({message:e.message})
        }
        res.status(400).send({message:e.message})
    }
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)
    users.splice(userIndex, 1)
    res.status(204).end()
})

//on deleting the user user with the username params may not exist in the users array
// so splice wont work properly 

// ex1
app.post('/users', function (req, res) {
    const newUser = req.body // the body is not empty
    try{
        userModal.validateUser(newUser);

        userModal.checkIfExists(newUser.username,users);

        users.push(newUser)
        res.status(201).end()

    }catch(e){
        if(e instanceof UserExistsError){
            return res.status(409).send({message:e.message})
        }
        res.status(400).send({message:e.message})
    }

})

app.listen(PORT, function (){
    console.log(`Server is running on port ${PORT}`);
})