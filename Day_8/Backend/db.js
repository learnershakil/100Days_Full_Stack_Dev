const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb+srv://learnershakil:killerboy@learnershakil.mtsu1n7.mongodb.net/?retryWrites=true&w=majority&appName=Learnershakil').then(()=>{
    console.log('Connected to the database'); // If the connection is successful
} ).catch((err)=>{
    console.log('Error connecting to the database', err); // If the connection is unsuccessful
})

// Creating a schema for the todo
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);    // Todo is the model

// Exporting the todo model
module.exports = {
    todo
}