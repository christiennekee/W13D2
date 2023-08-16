// Create a SHOW route (show routes use a get request)
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {
        // include a second param that must be an object (req.params.indexOfFruitsArray)
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});
app.get('/veggies/', (req, res) => {
    res.send(vegatables)
});
app.get('/veggies/:indexOfVegetablesArray', (req, res) => {
    res.send(vegatables[req.params.indexOfVegetablesArray]);
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
});