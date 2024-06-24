const express = require('express');
const app = express();
const port = 3000;

function calculateSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send(sum.toString());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});