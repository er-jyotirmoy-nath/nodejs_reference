var Emitter = require('events');

var emitevent = new Emitter();

emitevent.on('greet',function(){
    console.log("Someone has greeted!!!");
});

emitevent.on('greet',function(){
    console.log("Another Greetings has been  recieved!!!");
});


console.log("Hello");

emitevent.emit("greet");