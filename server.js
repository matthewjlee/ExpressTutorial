const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
//make sure to place body-parser before CRUD-handlers!

app.get('/', (req, res) => {
	res.sendFile('/Users/mjlee/Documents/learnnode/ExpressTutorial' + '/index.html')
})

//navigating to /quotes
app.post('/quotes', (req, res) => {
	console.log(req.body);
})

mongoconnect('link-to-mongoddb,' (err, database)) => {
	//start the server
}

app.listen(3000, function() {
	console.log('listening on 3000')
})