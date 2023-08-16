const express = require ('express')
const jsxViewEngine = require('jsx-view-engine');
const dotenv = require ('dotenv')

const fruits = require('./models/fruits.js');
const veggies = require('./models/veggies.js');

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.set('view engine', 'jsx');

app.engine('jsx', jsxViewEngine());

// Define middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

// Define routes
app.get('/', (req, res) => {
    res.send("Home page of Fruits and Veggies");
});

app.get('/fruits/', (req, res) => {
    // res.send(fruits)
    res.render('Index', {fruits: fruits});
});

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
    res.redirect('/fruits'); // sends user back to fruits page, /fruits
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});