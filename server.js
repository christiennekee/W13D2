const express = require('express');
const fruits = require('/.models/fruits.js');
const veggies = require('/.models/veggies.js');

const app = express ();

app.set('view engine', 'jsx');

app.engine('jsx', requrire('jsx-view-engine').createEngine());


// Define routes
app.get('/', (req, res) => {
res.send("Home Page of Fruits and Veggies");	
});

app.get('/fruits/', (req, res) =>{
    //res.send(fruits)
    res.render('Index', {fruits: fruits});
});


//Create a SHOW route (show routes use a get request)
app.get('/fruits/:indexOfFruistArray', (req, res) => {
//res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {
        //include a second param that must be an object (req.params.indexOfFruitsArray)
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

app.get('/veggies/', (req, res) =>{
    res.send(veggies)
});

app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
    res.send(fruits[req.params.indexOfVeggiesArray]); 	
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});