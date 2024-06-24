const express = require('express'); //Importing express module
const app = express(); //Creating an express app
const port = 3000; //Port number
const fs = require('fs'); //Importing fs module

app.get('/files/:fileName', (req, res) => { //Creating a route to read the file
const name = req.params.fileName; //Getting the file name from the URL
console.log(name); //Printing the file name
fs.readFile(name,'utf-8',(err,data)=>{ //Reading the file
    if(err){ //If there is an error
        console.log(err); //Printing the error
    }
    res.json({data}); //Sending the data as a response
})
});

//Listen to the port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); //Printing the server URL
});