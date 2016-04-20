
$( document ).ready(function() {

var countries = {
	"United States": {
		capital: "Washington D.C.",
		animal: "Bald Eagle",
		language: "English",
		Population : "318.9 million"
		
	},
    "Dominican Republic": {
    	capital: "Santo Domingo",
    	animal: "Palmchat",
    	language: "Spanish",
    	Population : "10.4 million"
    }
};



$("#btnSubmit").click(function() {
	
	var Countries = $("#country").val();

var hello = $("<li></li>").text(countries[Countries].capital +"         "+ countries[Countries].animal +"         "+countries[Countries].language +"         "+countries[Countries].Population);

$("body").append(hello);


});
 });

