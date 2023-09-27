//Using  conditionnal routing to express bringing modular source code structure
//basic route
const express = require('express');

// Necessary imports
const fs = require('fs');
const path = require('path');

//creation express router
const router = express.Router();

//Define the home page
router.get('/',(req,res)=>{
    res.status(200).send(`
    <h1>Explanation:</h1>
    <p><a href="/hello?name=John">/hello?name=John</a> - Replies with "Hello, John!"</p>
    <p><a href="/hello?name=Elanore">/hello?name=Elanore</a> - Replies with a short intro of Elanore</p>
    <p><a href="/hello?name=Noe">/hello?name=Noe</a> - Replies with a short intro of Noe</p>
    <p><a href="/hello?name=Solveig">/hello?name=Solveig</a> - Replies with a short intro of Solveig</p>
    <p><a href="/hello?test">/hello?test</a> - Any other path replies with a 404 code and a "Not Found" message.</p>
    `);
});

//define the /hello page 
router.get('/hello',(req,res)=>{
    const params = req.query;
    if('name' in params){
        if(params['name']=== 'Elanore'){
            res.send('Hello Guys, I am Elanore Lelievre, a 4th year student at the ECE school.I am 20 and I love node.js');
        }else if(params['name']=== 'Noe'){
            res.send('Hello , my name is Noe , I am 20 years old , i like playing video games and watching movies!');
        }else if(params['name']=== 'Solveig'){
            res.send('I am Solveig Berling, also a 4th year student at ECE. I am 20 and I am fond WebTech');
        }else{
            res.send('Hello '+params['name']);
        }
    }else{
        res.sendStatus(404);
    }
});

//define the /about page 
router.get('/about', (req,res) => {
    // Construct the path to the about.json file
    const aboutPath = 'content/about.json';
    // Check if the about.json file exists
    fs.access(aboutPath, fs.constants.F_OK, (err) => {
        if (err) {
            res.Status(404).send('Not Found');
        } else {
            // If the file exists, read and send its content as JSON
            // If the file exists, read and send its content as JSON
            fs.readFile(aboutPath, 'utf8', (err, data) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).json(JSON.parse(data));
                }
            });
        }
    });
});

router.use((req, res)=>{
    res.status(404).send('Not Found');
});

module.exports = router;


