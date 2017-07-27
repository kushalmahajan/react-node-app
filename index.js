'use strict';

// const app = require('./express');
const express = require('express'),
    notes = require('./routes/rs_notes'),
    morgan = require('morgan'),
    path = require('path');

const app = express();

const router = express.Router();
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// route middleware that will happen on every request
router.use((req, res, next) => {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get('/', (req, res) => {
   res.send('Home');
});

app.use('/api', router);
app.use('/api/notes', notes);




// Always return the main index.html, so react-router render the route in the client
// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
// });

module.exports = app;

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
