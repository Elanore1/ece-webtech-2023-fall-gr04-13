//Using  conditionnal routing to express bringing modular source code structure
//basic route
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//using route
const routes = require('./routes');

//we use our routes file for / pages
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
