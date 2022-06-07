// import express
const express = require('express');
const app = express();

//import index.ejs

// view engine
app.set('view engine','ejs')


//listen for request
const port = 4000;

app.listen(port);

music_genre = [
    'afro', 
    'blues', 'country', 'dance music', 'hiphop','indie','jazz','metal', 'raggae', 'roc'];

    //route
    app.get('/', (req,res) =>{
       res.send("This site offers different music genre history. THe following pages will tell you more..")
    })

    app.get('/:index',(req, res) => {
           if(music_genre[req.params.index])
           {res.render('index', {music_name: music_genre[req.params.index]});}
           else{
                  res.send("wrong route. Please choose between 0 and 9")
           }

    })