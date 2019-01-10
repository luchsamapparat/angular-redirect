const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    exposedHeaders: [
        'Location'
    ]
}));

app.post('/login', (req, res) => {
    res.redirect(302, '/logged-in');
});

app.get('/logged-in', (req, res) => {
    res.json({
        status: 'logged in'
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));