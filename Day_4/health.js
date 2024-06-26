const express = require('express'); // Import express module
const app = express(); // Create express app
const port = 3000; // Set port number

app.get('/health', (req, res) => {
    const kidneyId = req.query.kidneyId; // Get kidneyId from query parameter
    const userName = req.headers.userName; // Get userName from header
    const password = req.headers.password; // Get password from header

    if (userName != 'admin' || password != 'pass') { // Check if userName and password are correct
    res.status(400).json({"msg": 'Something went up with input!!'}); // Send error message
    return; 
    }

    if (kidneyId != 1 && kidneyId != 2) { // Check if kidneyId is valid
    res.status(400).json({"msg": 'Invalid kidneyId!!'}); // Send error message
    return;
    }

    res.json({"msg": 'Healthy!!'}); // Send success message
});


app.listen(port, () => { // Start server
    console.log(`Server running at http://localhost:${port}`); 
});