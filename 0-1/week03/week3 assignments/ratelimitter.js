const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

// This object will track the number of requests per user
let numberOfRequestsForUser = {};

// Reset the request tracking every 1 second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

// Global middleware to enforce rate limiting
app.use((req, res, next) => {
    const userId = req.headers['user-id']; // Get user ID from header

    // If user-id header is missing
    if (!userId) {
        return res.status(400).send('Missing user-id header');
    }

    const now = Date.now();
    const userRequests = numberOfRequestsForUser[userId] || [];

    // Filter out only the requests made in the last 1000 milliseconds
    const recentRequests = userRequests.filter(timestamp => now - timestamp <= 1000);

    if (recentRequests.length >= 5) {
        return res.status(404).send('Rate limit exceeded');
    }

    // Add current request timestamp
    userRequests.push(now);
    numberOfRequestsForUser[userId] = userRequests;

    next(); // Continue to the requested route
});

// GET endpoint
app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

// POST endpoint
app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

// PUT endpoint
app.put('/user', (req, res) => {
    res.status(200).json({ msg: 'updated dummy user' });
});

// DELETE endpoint
app.delete('/user', (req, res) => {
    res.status(200).json({ msg: 'deleted dummy user' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
