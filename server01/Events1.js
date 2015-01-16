var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;

var connection = function(id) {
    console.log('client id:' + id);
};

myEmitter.on('connection', connection);

myEmitter.on('message',function(msg){
    console.log('message:' + msg);
});

myEmitter.emit('connection', 6);
myEmitter.emit('connection', 2);
myEmitter.emit('message', 'This is first message');
myEmitter.emit('message', 'This is second message');
myEmitter.emit('message', 'Hello Gaurav Sharma');