# ECE Web Technologies LAB1

Lab : Getting started with Node.js & GIT

## Introduction

This lab starts a new Node.js project that serves as the basis for the next course.
First, we choose the working directory and create a folder initialized to a Git directory. 
I use VS code to create a simple Node.js application that creates an HTTP server on port localhost:8080 and runs it.
We create an index.js file and handles.js to reorganize the code. 
I organize the module code with an NPM script for different scripts. 
The 'test' script displays an error.
The 'start' function opens the index.js file.
The 'dev' function opens the index.js file using nodemon to avoid restarting the server each time.

## Running/Usage instruction

The aim of this application is to provide 3 routes :
- '/' explains how '/hello' works
- '/hello' takes a name as a query parameter and displays Hello [name] for unknown names and my name with a short introduction if it's one of those name : Solveig, Noe, Elanore.
- '/about' displays the contents of the about.json file in the content folder.
- Any other path returns a 404 error with a not found message.

## Name

Elanore Lelièvre, Solveig Berling, Noé Pham

