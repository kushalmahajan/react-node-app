const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const router = express.Router();
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
require('./routes/rs_notes')(app);
// Always return the main index.html, so react-router render the route in the client
router.get('/user', (req, res) => {
   res.send({
       user: {
           name: 'Test',
           mobile: 9987464702
       }
   });
});

// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });


module.exports = app;
