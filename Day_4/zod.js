const express = require('express'); // Import express module
const app = express(); // Create express app
const port = 3000; // Set port number
const zod = require('zod'); // Import zod module

const schema = zod.array(zod.number()); // Create a schema

app.use(express.json()); // Parse JSON bodies

app.post('/health', (req, res) => {  // Create a POST request
    const kidneys = req.body.kidneys; // Get kidneys from body
        // const kidneyLength = kidneys.length;
        const response = schema.safeParse(kidneys); // Validate kidneys
        if(!response.success) {
            res.status(411).json({msg: "input invalid!!"})
        }else{
        res.send(response);
    }
});


app.listen(port, () => { // Start server
    console.log(`Server running at http://localhost:${port}`); 
});