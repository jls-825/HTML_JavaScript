function init_table(){
	//get dropdown option
	var option = document.getElementById("table");
	var selected = option.options[option.selectedIndex].value;
	
	//create url based on option chosen
	var URL = "http://localhost:8080/";	
	if(selected == "student"){
		URL += "student";
	}
	else if(selected == "course"){
		URL += "course";
	}
	else{
		URL += "grades";
	}
	
	//initialize AJAX request
	$.ajax({
		type: "GET",
		url: URL,
		dataType: "html",
		success: function(msg){
			$("#out").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr, ajaxOptions, thrownError)
			$("#out").html("Error contacting server!");
		}
	});
}

function init_transcript(){
	var option = document.getElementById("transcript");
	var selected = option.options[option.selectedIndex].value;
	
	//create url based on option chosen
	var URL = "http://localhost:8080/name?student=";	
	if(selected == "1"){
		URL += "1";
	}
	else{
		URL += "2";
	}
	
	//initialize AJAX request
	$.ajax({
		type: "GET",
		url: URL,
		dataType: "html",
		success: function(msg){
			$("#out").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log(xhr, ajaxOptions, thrownError)
			$("#out").html("Error contacting server!");
		}
	});
}