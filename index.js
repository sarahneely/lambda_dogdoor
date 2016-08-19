var alexa = require('alexa-app');
var app = new alexa.app();

app.launch(function(request,response) {
	response.say('woof woof!');
	response.card("woof woof!","This is an example card");
	response.shouldEndSession(false);
});

app.intent("dogDoor", {
	// slots
	'slots':{"status":"STATUS"},
    'utterances':[ '{open} the door', '{close} the door' ],

},
 function(request,response) {
	 	var status;
		switch(request.slot('status')) {

		case'open':
		// url for ngrog
		status='opening';
		break;

		case'close':
		// url for ngrog
		status='closing';
		break;

		default:
		// url for ngrog
		status='You broke me';
		break;

	};
	 response.say(status);
	 response.shouldEndSession(true);
   response.send();
});


	/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();
