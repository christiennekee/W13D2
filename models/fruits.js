// // Define objects
// // Create array of fruits
// const fruits  = [
//     {
//      name: 'apple',
//      color: 'red',
//      readyToEat: true
//     },
//     {
//      name: 'banana',
//      color: 'yellow',
//      readyToEat: true
//     },
//     {
//      name:'pear',
//      color: 'green',
//      readyToEat: false
//     }];

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const fruits = mongoose.model('fruits', fruitSchema);

    
     module.exports = fruits;