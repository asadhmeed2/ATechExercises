const express = require('express');
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const words =[];

const PORT = 3000;


app.get('/', function(req, res){
    res.send('server')
})

app.get('/sanity', function(req, res){
    res.send('Server is up and running')
})

app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`);
})