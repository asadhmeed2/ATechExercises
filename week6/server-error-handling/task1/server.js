const express = require('express');
const app = express();

const userModal = require('./user') 

const {UserExistsError} = require('./customErrors')


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

app.delete('/users/:username', function (req, res) {
    let username = req.params.username
    let userIndex = users.findIndex(user => user.username === username)
    users.splice(userIndex, 1)
    res.status(204).end()
})

//on deleting the user user with the username params may not exist in the users array
// so splice wont work properly 

app.post('/users', function (req, res) {
    const newUser = req.body // the body is not empty
    try{
        userModal.checkIfExists(newUser,users);
        userModal.validateUser(newUser);
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