const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
var db;

app.use(bodyParser.urlencoded({extended: true}))
//make sure to place body-parser before CRUD-handlers!

app.get('/', (req, res) => {
	res.sendFile('/Users/mjlee/Documents/learnnode/ExpressTutorial' + '/index.html')
})

//navigating to /quotes
app.post('/quotes', (req, res) => {
	//console.log(req.body);
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);

		//once we're done saving, we have to redirect the user somewhere
		console.log('saved to database');
		//redirecting to / causes the browser to reload
		res.redirect('/');
	})
})

MongoClient.connect('mongodb://mjlee256:danisafan@ds159527.mlab.com:59527/star-wars-quotes', (err, database) => {
	//start the server
	if (err) return console.log(err);
	db = database;
		app.listen(3000, () => {
		console.log('listening on 3000');
	})
})
