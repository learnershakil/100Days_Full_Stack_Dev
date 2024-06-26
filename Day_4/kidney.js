const express = require('express'); // Import express module
const app = express(); // Create express app
const port = 3000; // Set port number

app.use(express.json()); // Parse JSON bodies

app.post('/health', (req, res) => {  // Create a POST request
    const kidneys = req.body.kidneys; // Get kidneys from body
        const kidneyLength = kidneys.length;
        res.send(`Number of kidneys: ${kidneyLength}`);
});

// global catches
app.use((err,req,res,next)=>{
    res.json({msg:"Wrong input!!"})
})


app.listen(port, () => { // Start server
    console.log(`Server running at http://localhost:${port}`); 
});