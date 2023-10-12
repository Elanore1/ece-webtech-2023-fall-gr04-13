const express = require('express');
const app = express();

// Necessary imports
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const path = require('path');

// Define a route for the root path
app.get('/', (req, res) => {
  res.status(200).send(`
    <h1>Explanation:</h1>
    <p><a href="/hello?name=John">John</a> - Replies with "Hello, John!"</p>
    <p><a href="/hello?name=Elanore">Elanore</a> - Replies with a short intro of Elanore</p>
    <p><a href="/hello?name=Noe">Noe</a> - Replies with a short intro of Noe</p>
    <p><a href="/hello?name=Solveig">Solveig</a> - Replies with a short intro of Solveig</p>
    <p><a href="/test">test</a> - Any other path replies with a 404 code and a "Not Found" message.</p>
  `);
});

// Define a route for the /hello path
app.get('/hello', (req, res) => {
  const name = req.query.name;

  if (name === 'Elanore') {
    res.status(200).send('Hello Guys, I am Elanore Lelievre, a 4th year student at the ECE school\nI am 20 and I love node.js');
  } else if (name === 'Solveig') {
    res.status(200).send('I am Solveig Berling, also a 4th year student at ECE\nI am 20 and I am fond of WebTech');
  } else if (name === 'Noe') {
    res.status(200).send('Hello, I am Noé, I love watching films and playing video games');
  } else if (name === 'John') {
    res.status(200).send('Hello John');
  } else {
    res.status(200).send(`Hello ${name}`);
  }
});

// Define a route for the /about path
app.get('/about', (req, res) => {
  // Construct the path to the about.json file
  const aboutPath = 'content/about.json';

  // Check if the about.json file exists
  fs.access(aboutPath, fs.constants.F_OK, (err) => {
    if (err) {
      // If the file doesn't exist
      res.status(404).send('Not Found');
    } else {
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

// Handle all other routes with a 404 response
app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = {
  serverHandle: app,
};
