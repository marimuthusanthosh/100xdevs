const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

let errorCount = 0;

app.get('/user', (req, res) => {
  const user = req.body;
  if (!user) {
    throw new Error('User not found');
  } 
  res.status(200).json(user);
});  

app.get("/errorcount", (req, res) => {
  res.status(200).json({ errorCount });
});

// Error handling middleware
app.use((err, req, res, next) => {
  errorCount++;
  console.error(err.stack);
  res.status(404).json({ error: 'User not found or something went wrong!' }); // Return 404 status code
}); 

app.listen(port, () => {  
  console.log(`Server is running on port ${port}`);
});

