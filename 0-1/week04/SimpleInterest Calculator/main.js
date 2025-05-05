const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const app = express();  
const port = 3000;
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/simpleinterest", (req, res) => {
    const { principal, rate, time } = req.body;
    if (principal && rate && time) {
        const interest = (principal * rate * time) / 100;
        res.json({ interest });
        console.log(`Principal: ${principal}, Rate: ${rate}, Time: ${time}, Interest: ${interest}`);
    } else {
        res.status(400).json({ error: "Please provide principal, rate, and time." });
    }
}); 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
} );

