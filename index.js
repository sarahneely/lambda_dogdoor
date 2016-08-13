var alexa = require('alexa-app');
var app = new alexa.app();


app.intent("dogDoor", {
	// slots
	'slots':{'open':'OPEN'},
    'utterances':[ 'open the door {open}' ],

    'slots':{'close':'CLOSE'},
    'utterances':[ 'close the door {close}' ]
},

 function(request,response) {
	// some code

	switch(position){
		case"open":
		// url for ngrog
		response.say("opening the dog door");
		break;

		case"close":
		// url for ngrog
		response.say("closing the dog door");
		break;

		default:
		// url for ngrog
		response.say("error occured");
		break;
	};