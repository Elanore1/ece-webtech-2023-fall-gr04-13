//Using  conditionnal routing to express bringing modular source code structure
//basic route
const express = require('express');
//to generate UUID (Universal Unique Identifier)
const { v4 : uuidv4 } = require('uuid');//using CommonJS syntax 
const bodyParser = require('body-parser');//for the post request

// Necessary imports
const fs = require('fs');
const path = require('path');
const dbModule = require('./db');

//creation express router
const router = express.Router();

//to parse json in the request body
router.use(bodyParser.json());

//Define the home page LAB2
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

//PART 2.2 LAB 3
//GET /articles
router.get('/articles', (req, res) => {
    const db = dbModule.getDb();
    const articles = db.articles;
    let texte = 'List of articles :<br><br>'; //adding all the article on the page
    
    articles.forEach(article => {
        //displaying all the articles informations
        texte += `<b>Title :</b> ${article.title} <br><b>Content :</b> ${article.content}<br><b>Author :</b> ${article.author}<br><b>Date :</b> ${article.date}<br><br>`;
    });
    res.send(texte); 
    res.end();
});

//POST /articles
router.post('/articles', (req, res) => {
    //extract data from the request
    const {title, content, author} = req.body;

    console.log(req.body);

    //verification that all data is here
    if(!title || !content || !author){
        return res.status(404).json({error: 'Missing required fields to add a new article (title, content and author is required)'});
    }
    //creation of the new article object
    const newArticle = {
        id : uuidv4(),
        title,
        content,
        date : new Date().toLocaleDateString(),
        author
    };
    const currentDb = dbModule.getDb();
    currentDb.articles.push(newArticle);
    dbModule.updateDb(currentDb);

    res.status(201).json(newArticle);
});

//Creating a function to retrieve an article by ID
function getArticleWhithId(articleID){
    const db = dbModule.getDb();
    //return the article in the db where id is the one in parameter
    return db.articles.find(article => article.id === articleID);
}

//GET /articles/:articleID
router.get('/articles/:articleId', (req, res) => {
    const articleID = req.params.articleId;
    const article = getArticleWhithId(articleID);
    if(article){
        //Showing the article on the front page
        let texte = `<b>Article ID :</b> ${article.id} <br><br>`; 
        texte += `<b>Title :</b> ${article.title} <br><b>Content :</b> ${article.content}<br><b>Author :</b> ${article.author}<br><b>Date :</b> ${article.date}<br><br>`;
        res.send(texte); 
        res.end();
    }else{
        res.status(404).json({error:'Article was not found'});
    }
});

//return all comments with the articleID
function getCommentWithArticleID(articleID){
    const db = dbModule.getDb();
    //return comment where the ID is the one of the article
    return db.comments.filter(comment => comment.articleId === articleID);
}

//return the timestamp as a date
function formatTimeStamp(timestamp){
    const date = new Date(timestamp * 1000);
    const options = {year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'};
    const formatDate = date.toLocaleDateString('en-US',options);
    return formatDate;
}

//GET '/articles/:articleId/comments
router.get('/articles/:articleId/comments',(req,res)=>{
    //get the id 
    const articleID = req.params.articleId;
    // Get comments of specified article ID
    const comments = getCommentWithArticleID(articleID);
    const article = getArticleWhithId(articleID);

    //if there is more than 0 comment
    if(comments.length > 0){
        //showing the comments
        let text = `<b> Comments for Article "${article.title}" :</b><br>(ID: ${articleID})<br><br>`;
        comments.forEach(comment => {
            const formattedDate = formatTimeStamp(comment.timestamp);
            text += `<b>Timestamp :</b> `+ formattedDate + `<br><b>Content :</b> ${comment.content}<br><b>Author :</b> ${comment.author}<br><br>`;
        });
        res.send(text);
    }else{
        //if there is no comment 
        let text = `No Comments for Article ID : ${articleID}<br><br>`;
        res.send(text);
    }
});

// POST /articles/:articleId/comments
router.post('/articles/:articleId/comments',(req,res)=>{
    const articleId = req.params.articleId;
    const article = getArticleWhithId(articleId);
    if (!article) {
        return res.send('No Article exist with this ID');
    }
    //writting the content and the author of the comment in the body 
    const { content, author } = req.body;
    
    //verification that all data is here
    if(!content || !author){
        return res.status(404).json({error: 'Missing required fields to add a new comment (content and author is required)'});
    }

    const newComment = {
        id : uuidv4(),
        timestamp : Math.floor(Date.now()/1000),
        content,
        articleId,
        author,
    }
    //adding the new comment
    const db = dbModule.getDb();
    db.comments.push(newComment);
    dbModule.updateDb(db);
});

//to find a comment with the ID
function getCommentWithId(articleId, commentId) {
    const db = dbModule.getDb();
    const article = db.articles.find(article => article.id === articleId);
    //verif if article exist
    if (article) {
        //find the comment
        const comment = db.comments.find(comment => comment.id === commentId);
        return comment;
    } else {
        return null;
    }
}

// GET `/articles/:articleID/comments/:commentID`
router.get('/articles/:articleID/comments/:commentID',(req,res)=>{
    const articleId = req.params.articleID;
    const commentId = req.params.commentID;
    //to get the comment
    const comment = getCommentWithId(articleId,commentId);
    const article = getArticleWhithId(articleId);
    //if exist
    if(comment){
        //showing the comment
        let text = `<b>Comment (ID:${commentId}) for Article "${article.title}" :</b><br><br>`;
        const formattedDate = formatTimeStamp(comment.timestamp);
        text += `<b>Timestamp :</b> `+ formattedDate + `<br><b>Content :</b> ${comment.content}<br><b>Author :</b> ${comment.author}<br><br>`;
        res.send(text);
    }else{
        let text = `No Comments with this ID : ${commentId}<br><br>`;
        res.send(text);
    }
});

router.use((req, res)=>{
    res.status(404).send('Not Found');
});

module.exports = router;


