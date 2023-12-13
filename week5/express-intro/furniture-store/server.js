
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/priceCheck/:name', (req, res) => {
   
    const itemName = req.params.name
    const item = store.find(item => item.name === itemName);

    if(!item) {
        return res.json({price:0})
    }

    const price =item.price
    
    res.json({price});
})

// app.get('/', (req, res) => {
//     res.json('Server is up and running smoothly')
// })

app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})
