const express = require('express');
const app = express();

const MIN_NUMBER_OF_WORDS = 1;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const wordCeunter = {}// word : count

const PORT = 3000;


app.get('/', function(req, res){
    res.send('server')
})

app.get('/sanity', function(req, res){
    res.send('Server is up and running')
})

app.get('/:word', function(req, res){
    const word = req.params.word

    const wordsCount = word.trim().split(' ').length

    if(wordsCount > MIN_NUMBER_OF_WORDS){
        return res.send({error:'input should be one word only'})
    }

    const wordInWordsCeunter =  !!wordCeunter[word];

    if(wordInWordsCeunter){
        return res.send({count:wordCeunter[word]})
    }else{
        return res.send({count:0})
    }
})

app.post('/addWord', function(req, res){
    const word = req.body.word
    if(typeof word !== 'string'){
        return res.send({error:"word is not a string"})
    }

    const wordsCount = word.trim().split(' ').length

    if(wordsCount > MIN_NUMBER_OF_WORDS){
        return res.send({error:'input should be one word only'})
    }
    
    const wordInWordsCeunter =  !!wordCeunter[word];
    
    if(wordInWordsCeunter){
        wordCeunter[word] += 1
    }else{
        wordCeunter[word] = 1
    }
    return res.send({text: `Added ${word}`, currentCount: wordCeunter[word] })
})

app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`);
})