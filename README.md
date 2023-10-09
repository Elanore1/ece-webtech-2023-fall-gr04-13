# ECE Web Technologies LAB3

Lab : Web API with Node.js

## Introduction

This lab starts by refactoring our previous application to use Express.
The Node.js application creates an HTTP server on port localhost:3000 and runs it.
We create an app.js and routes.js to reorganize the code. 
The app.js use express and requires the routes files routes.js to load all the routes we have created.

The last routes are still here ('/', '/hello','/about') and we add new ones :
- GET `/articles` wich list all articles
- POST `/articles` wich add a new article
- GET `/articles/:articleID` wich get an article by ID
- GET `/articles/:articleID/comments` wich get all comments of the article with article ID
- POST `/articles/:articleID/comments` wich add a new comments to a specific article with articleID
- GET `/articles/:articleID/comments/:commentID` wich get a comment with commentID of the article with articleID

## Running/Usage instruction

We can run the application with :

```bash
npm run dev
```

On a web page, go on "http://localhost:8080" :

You can manage on the server using the routes described above.

- GET `/articles` wich list all articles : "http://localhost:8080/articles" 

- POST `/articles` wich add a new article 
To post a new article, you have to run inside the terminal this command :

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "TitleOfComment", "content": "ContentOfCommand", "author": "NameOfTheAuthor"}' http://localhost:8080/articles
```

 - GET `/articles/:articleID` wich get an article by ID :

For exemple this will show the first article of the database
http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b

- GET `/articles/:articleID/comments` wich get all comments of the article with article ID

For exemple this will show the comments on the first article 
http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments

- POST `/articles/:articleID/comments` wich add a new comments to a specific article with articleID
  
```bash
curl -X POST -H "Content-Type: application/json" -d '{"content": "This article is super nice, I would like to read more from this subject", "author": "Elanore Lelievre"}' http://localhost:8080/articles/fe94397c-c350-4d45-a27c-d87745d87a4d/comments
```

- GET `/articles/:articleID/comments/:commentID` wich get a comment with commentID of the article with articleID

For example this will show the comment with id20704ee6-9b7b-49cb-b7b6-d6cb231da37d for the first article
http://localhost:8080/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments/20704ee6-9b7b-49cb-b7b6-d6cb231da37d

## Name

Elanore Lelièvre
Noé Pham
Solveig Berling
