const express = require('express');

const boatsRouter = require('./routes/boats');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/boats', boatsRouter);
app.use('/api/users', usersRouter);

app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/api/logout', (req, res) => {
    console.log("logout");
    res.end();
});

app.listen(3000, () => {
    console.log('listening on 3000');
});
