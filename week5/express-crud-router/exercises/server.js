const express = require('express');
const app = express();

const MIN_NUMBER_OF_WORDS = 1;
const BAD_REQUEST_STATUS = 400;
const NOT_FOUND_STATUS = 404;
const SUCCESS_STATUS = 200;

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
    
    addWord(word);

    return res.send({text: `Added ${word}`, currentCount: wordCeunter[word] })
})

app.post('/addWordsFromSentence', function(req, res){
    const sentence  = req.body.sentence 
    if(typeof sentence !== 'string'){
        return res.send({error:"sentence is not a string"})
    }

    const words = sentence.trim().split(' ')
    let numOfNewWords = 0;
    let numOldWords =0;
    for(let word of words){
        if(wordCeunter[word]){
            numOldWords += 1
        }else{
            numOfNewWords += 1
        }
        addWord(word)
    }
    
    return res.send({text: `Added ${numOfNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

app.delete('/deleteWord/:word',function(req, res){
    const word = req.params.word

    const wordsCount = word.trim().split(' ').length

    if(wordsCount > MIN_NUMBER_OF_WORDS){
        return res.status(BAD_REQUEST_STATUS).send({error:'input should be one word only'})
    }
    
    if(!wordCeunter[word]){
        return res.status(NOT_FOUND_STATUS).send({error:"deleted word not found"})
    }
    
    delete wordCeunter[word]

    return res.status(SUCCESS_STATUS).send('success')
})

app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`);
})

const addWord = function(word){
    
    const wordInWordsCeunter =  !!wordCeunter[word];
    
    if(wordInWordsCeunter){
        wordCeunter[word] += 1
    }else{
        wordCeunter[word] = 1
    }
}