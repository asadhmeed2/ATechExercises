
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

app.get('/buy/:name', (req, res) => {
   
    const itemName = req.params.name
    const itemIdx = store.findIndex(item => item.name === itemName);

    
    if(itemIdx === -1) {
        return res.sendStatus(404).json({error:'item not in stock'})
    }
    
    if(!store[itemIdx].inventory){
        return res.sendStatus(301).json({error:'item out of stock'})
    }

    console.log(store[itemIdx].inventory);

    store[itemIdx].inventory -= 1;
    
    res.json({item:store[itemIdx]});
})

app.get('/sale', (req, res) => {
   
    const {admin} = req.query
    
    if(admin !== 'true'){
        res.json(store);
    }

    const descountStore = store.map(item => {
        
        if(item.inventory > 10){
         item = {...item, price : item.price * 0.5};
        }
        return item
    })
    return res.json(descountStore)
})



// app.get('/', (req, res) => {
//     res.json('Server is up and running smoothly')
// })

app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})
