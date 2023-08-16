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

const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Fruits show page</h1>
                The { this.props.fruit.name } is { this.props.fruit.color }
        { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
            </div>
        )
    }
}



module.exports = Show;