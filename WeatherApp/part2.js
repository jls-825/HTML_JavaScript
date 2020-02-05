var express = require('express');
var http = require('http');
var app = express();

//call server, take the message and return it the desired num of times
app.get('/part2', function (req,res){
	var message = req.query.message;
	var count = req.query.count;
	var myResponse = '';
	for(i=0; i<count; i++){
		myResponse += message;
	}
	res.send(myResponse);
})

//check if runnning on console
app.listen(8080,function(){
	console.log('Server Running');
});