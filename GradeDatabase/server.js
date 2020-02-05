//initialize express
var express = require('express');
var http = require('http');
var app = express();
app.use(express.static("."));
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Dinoaur247@',
	database: 'database'
});

con.connect(function(err) {
	if (err) {
		console.log("Error connecting to database");
	}
	else {
		console.log("Database successfully connected");
	}
});

app.get("/student", function(req, res) {
	con.query('SELECT * FROM student',
	function(err,rows,fields) {
		if (err)
			console.log('Error during query processing');
		else
			var mk_table = "<table><tr><th>Student ID</th><th>First Name</th><th>Last Name</th><th>Major</th><th>Birthday</th></tr>";
			for (var i = 0; i < rows.length; i++) {
				mk_table += "<tr><td>" + rows[i].student_id + "</td><td>" + rows[i].first_name + "</td><td>" + rows[i].last_name + "</td><td>" + rows[i].major + "</td><td>" + rows[i].birthday + "</td></tr>";
			};
			mk_table += "</table>"
			res.send(mk_table)
});
});

app.get("/course", function(req, res) {
	con.query('SELECT * FROM course',
	function(err,rows,fields) {
		if (err)
			console.log('Error during query processing');
		else
			var mk_table = "<table><tr><th>Course ID</th><th>Course Description</th></tr>";
			for (var i = 0; i < rows.length; i++) {
				mk_table += "<tr><td>" + rows[i].course_id + "</td><td>" + rows[i].c_description + "</td></tr>";
			};
			mk_table += "</table>"
			res.send(mk_table)
});
});

app.get("/grades", function(req, res) {
	con.query('SELECT * FROM grades',
	function(err,rows,fields) {
		if (err)
			console.log('Error during query processing');
		else
			var mk_table = "<table><tr><th>Student ID</th><th>Course ID</th><th>Term</th><th>Grade</th></tr>";
			for (var i = 0; i < rows.length; i++) {
				mk_table += "<tr><td>" + rows[i].student_id + "</td><td>" + rows[i].course_id + "</td><td>" + rows[i].term + "</td><td>" + rows[i].grade + "</td></tr>";
			};
			mk_table += "</table>"
			res.send(mk_table)
});
});

app.get('/name', function(req, res){
	student_name = req.query.student;
	con.query('SELECT student.first_name, student.last_name, course.course_id, course.c_description, grades.student_id, grades.term, grades.grade FROM student, course, grades WHERE grades.student_id = student.student_id && grades.course_id = course.course_id && student.student_id = \'' + student_name + '\'',
	function(err, rows, fields){
		if (err)
			console.log("Error during query processing");
		else{
			mk_table = "<table><tr><th>Student ID</th><th>First Name</th><th>Last Name</th><th>Term</th><th> Course ID </th><th> Description </th><th> Grade </th></tr>";
			for (var i = 0; i < rows.length; i++){
				mk_table += "<tr><td>" + rows[i].student_id + "</td><td>" + rows[i].first_name + "</td><td>" + rows[i].last_name + "</td><td>" + rows[i].course_id + "</td><td>" + rows[i].c_description + "</td><td>" + rows[i].grade + "</td></tr>";
			}
			mk_table += "</table>"
			console.log(rows);
			res.send(mk_table)
		}
	}
)
});

//make sure sever is running
app.listen(8080,function(){
	console.log("Server Running");
});