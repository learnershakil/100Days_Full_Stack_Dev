const express = require('express'); //Importing express module
const { is } = require('type-is'); //Importing type-is module
const app = express(); //Creating an express app
const port = 3000; //Port number

//Data of the user
const users = [{
    name: 'learner',
    kidneys: [{
        healthy: true,
    }]
}]

//Get the data of the user
app.get('/', (req, res) => {
    const learnerKidneys = users[0].kidneys;
    const numberOfKidneys = learnerKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (learnerKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        learnerKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

//Middleware to parse JSON data
app.use(express.json()); //See in next class!!

//Add a kidney
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: 'Kidney added successfully'
    });
});

//Update the health of all kidneys
app.put('/', (req, res) => {
    const noOfKidneys = users[0].kidneys.length;
    for (let i = 0; i < noOfKidneys; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: 'All kidneys are healthy now'
    });
});

//Delete all unhealthy kidneys
app.delete('/', (req, res) => {
    const newKidneys =[]
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push(users[0].kidneys[i]);
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: 'Unhealthy kidneys removed successfully'
    });
});

//Listen to the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});