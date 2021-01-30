const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'));

app.listen(8080);