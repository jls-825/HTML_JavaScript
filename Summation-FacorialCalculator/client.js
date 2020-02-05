function init_client(){
	//get seed and calculation method
	var seed = $("#seed").get(0).value;
	var dropdown = $("#calc").get(0);
	var SF = dropdown.options[dropdown.selectedIndex].value;
	
	//seed will be sent as a json object
	var jsonObj = {
		"seed":seed
	};
	
	//create url based on option chosen
	var URL = "http://localhost:8080/";	
	if(SF == "fact"){
		URL += "fact";
	}
	else{
		URL += "sum";
	}
	
	//initialize AJAX request
	$.ajax({
		type: "GET",
		url: URL,
		data: jsonObj,
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