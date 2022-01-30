const express = require('express');

const boatsRouter = require('./routes/boats');
const usersRouter = require('./routes/users');

const sim = require('./sim.js');

const app = express();
app.use(express.json());

app.use('/api/boats', boatsRouter);
app.use('/api/users', usersRouter);

app.post('/api/target', (req, res) => {
    console.log(req.body);
    sim.setTarget(req.body);
    res.end();
});

app.post('/api/start', (req, res) => {
    console.log(req.body);
    sim.setRunning(true);
    res.end();
});

app.post('/api/stop', (req, res) => {
    console.log(req.body);
    sim.setRunning(false);
    res.end();
});

app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/api/logout', (req, res) => {
    console.log("logout");
    res.end();
});

setInterval(sim.simStep, 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
