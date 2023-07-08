/*
file: face.js
main face detection display on mirror homepage
*/

//Function to fetch faceid from flask server
function faceid() {

	// Send an ajax post request to get updated weather from flask
	req = $.ajax({
		url : '/faceid',
		type : 'POST',
		data : {}
	});

	req.done(function(data) {

		// Split the data from the updated weather json
        var name = data.name;
        var inistatus = data.inistatus;
		
		// Update the html elements with the data
        $('.name').text(name);
        $('.inistatus').text(inistatus);

	});

}

faceid();  // Update the weather on the boot up

setInterval(faceid, 0);  // Update the time every 10 minutes
