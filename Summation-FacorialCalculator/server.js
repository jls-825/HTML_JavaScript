//initialize express
var express = require('express');
var http = require('http');
var app = express();

//make sure the server can talk to the browser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//checks if value is an integer
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

//summation
app.get('/sum', function (req,res){
	var seed = req.query.seed;
	console.log("Summation request: " + seed);
	
	if(seed == ""){
		res.send("Please enter a seed.");
	}
	else if(!isInt(seed)){
		res.send("Please enter a number.");
	}
	else if(seed < 0){
		res.send("Input must be positive.");
	}
	else{
		var result = 0;
		for(i=0; i<=seed; i++){
			result += i;
		}
		console.log("Sending result: " + result + "\n");
		res.send("The summation of " + seed + " is " + result);
	}
})

//factorial
app.get('/fact', function (req,res){
	var seed = req.query.seed;
	console.log("Factorial request: " + seed);
	
	//process invalid requests
	if(seed == ""){
		res.send("Please enter a seed.");
	}
	else if(!isInt(seed)){
		res.send("Please enter a number.");
	}
	else if(seed < 0){
		res.send("Input must be positive.");
	}
	else{
		var result = 1;
		for(i=1; i<=seed; i++){
			result *= i;
		}
		console.log("Sending result: " + result + "\n");
		res.send("The factorial of " + seed + " is " + result);
	}
})

//make sure sever is running
app.listen(8080,function(){
	console.log("Server Running");
});