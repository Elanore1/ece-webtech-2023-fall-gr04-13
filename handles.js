// Necessary imports
// Import Node url module
const url = require('url')
const qs = require('querystring')
const fs = require('fs');
const path = require('path');

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const pathname = route.pathname 
        const params = qs.parse(route.query)
        
        //Creating an application with 3 routes
        if(pathname == '/'){
            res.writeHead(200, {'Content-Type': 'text/html'})
            //explaining how /hello works
            const explanation = `
            <h1>Explanation:</h1>
            <p><a href="/hello?name=John">/hello?name=John</a> - Replies with "Hello, John!"</p>
            <p><a href="/hello?name=Elanore">/hello?name=Elanore</a> - Replies with a short intro of myself</p>
            <p><a href="/hello?name=Noe">/hello?name=Noe</a> - Replies with a short intro of myself</p>
            <p><a href="/hello?test">/hello?test</a> - Any other path replies with a 404 code and a "Not Found" message.</p>
            `;
            res.end(explanation);
        }else if (pathname === '/hello' && 'name' in params) {
            
            res.writeHead(200, {'Content-Type': 'text/html'})
            if(params['name']=='Elanore'){
                //My name => hello + short itroduction
                res.write('Hello Guys, I am Elanore Lelievre, a 4th year student at the ECE school ') 
                res.write('<p>I am 20 and I love node.js<p>') 
            }else if(params['name']=='Noe'){
                res.write('Hello , my name is Noé , I am 20 years old , i like playing video games and watching movies!')
            }else{
                //Just saying hello name
               res.write('Hello ' + params['name']) 
            }
            res.end();
        }else if(pathname == '/about'){
            // Construct the path to the about.json file
            const aboutPath = 'content/about.json';

            // Check if the about.json file exists
            fs.access(aboutPath, fs.constants.F_OK, (err) => {
                if (err) {
                    // If the file doesn't exist
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write('Not Found');
                    res.end();
                } else {
                    // If the file exists, read and send its content as JSON
                    fs.readFile(aboutPath, 'utf8', (err, data) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' });
                            res.write('Internal Server Error');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.write(data);
                        }
                        res.end();
                    });
                }
            });
        }else {
            //EREOR MESSAGE
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Not Found');
            res.end();
        }
        
    } 
  }