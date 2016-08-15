var alexa = require('alexa-app');
var app = new alexa.app();

app.launch(function(request,response) {
	response.say('woof woof!');
	response.card("woof woof!","This is an example card");
});

app.intent("dogDoor", {
	// slots
	'slots':{"open":"OPEN"},
    'utterances':[ '{open} the door' ],

    'slots':{"close":"CLOSE"},
    'utterances':[ '{close} the door' ]
},

 function(request,response) {
	// some code
	var open = request.slot("open")
	var close = request.slot("close")
	switch(position) {
		case"open":
		// url for ngrog
		response.say("opening the dog door");
		response.send();
		break;

		case"close":
		// url for ngrog
		response.say("closing the dog door");
		response.send();
		break;

		default:
		// url for ngrog
		response.say("error occured");
		response.send();
		break;

	response.shouldEndSession(true);
    response.send();
	}
});


	app.intent('checkStatus', 
	{
    	'utterances':[ 
    		'status check', 'what is the status', 'tell me the status'
    	]
  	},
	function(request,response) {
		setTimeout(function() {		// simulate an async request

	        // This is async and will run after a brief delay
	        response.say('Status is operational, mam!');
	    
	        // Must call send to end the original request
	        response.send();
		
		}, 250);

	    // Return false immediately so alexa-app doesn't send the response
	    return false;
	}
);

	/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();