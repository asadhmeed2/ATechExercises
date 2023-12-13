
const express = require('express');

const app = express();

const PORT = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]



app.get('/priceCheck/:name', (req, res) => {
   
    const itemName = req.params.name
    const item = store.find(item => item.name === itemName);
    const price =item.price
    
    res.json({price});
})

app.get('/', (req, res) => {
    res.json('Server is up and running smoothly')
})

app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})
