const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let db = {
	articles: [
		{
			id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
			title: "My article",
			content: "Content of the article.",
			date: "04/10/2022",
			author: "Liz Gringer"
		},
		{
			id: "fe94397c-c350-4d45-a27c-d87745d87a4d",
			title: "All seems good",
			content: "Adding new comment is okey",
			date: "02/10/2023",
			author: "Elanore"
		}
	],
	comments: [
		{
			id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
			timestamp: 1664835049,
			content: "Content of the comment.",
			articleId: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
			author: "Bob McLaren"
		},
		{
			id: "20704ee6-9b7b-49cb-b7b6-d6cb231da37d",
			timestamp: 1696260832,
			content: "This article is super nice, I would like to read more from this subject",
			articleId: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
			author: "Elanore Lelievre"
		},
		{
			id: "b0763761-d624-47c5-b846-d9c8f920a010",
			timestamp: 1696260901,
			content: "This article is super nice, I would like to read more from this subject",
			articleId: "fe94397c-c350-4d45-a27c-d87745d87a4d",
			author: "Elanore Lelievre"
		}
	]
};

// Function to format the db object as JavaScript code
function formatDbObject(dbObject) {
  const formattedDb = Object.entries(dbObject).map(([key, value]) => `${formatKey(key)}: ${formatDbItem(value)}`).join(',\n\t');
  return `{\n\t${formattedDb}\n}`;
}

// Function to format individual items in the db object
function formatDbItem(item) {
  if (Array.isArray(item)) {
    return `[\n\t\t${item.map(formatDbItem).join(',\n\t\t')}\n\t]`;
  } else if (typeof item === 'object') {
    return `{
${Object.entries(item).map(([key, value]) => `\t\t\t${formatKey(key)}: ${formatDbItem(value)}`).join(',\n')}\n\t\t}`;
  } else {
    return JSON.stringify(item);
  }
}

// Function to format the keys by removing quotes
function formatKey(key) {
  return key.replace(/\"/g, '');
}

//function return de db object 
function getDb(){
  return db;
}

//to update the db 
function updateDb(newDb){
  db = newDb;
  // Read the existing content of db.js
  const existingContent = fs.readFileSync('./db.js', 'utf-8');
  // Locate the part to replace using a regular expression
  const regex = /let db = {[\s\S]*?};/;
  const match = existingContent.match(regex);
  if(match){
    //rewrite the db with the update
    const newcontentdb = existingContent.replace(match[0], `let db = ${formatDbObject(db)};`);
    fs.writeFileSync('./db.js', newcontentdb, 'utf-8');
  }else{
    console.error('Could not find the specified markers in db.js');
  }
}

module.exports = {getDb, updateDb};