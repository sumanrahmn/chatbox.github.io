const express = require('express');
const socket = require('socket.io');

var app = express();
var http = require('http').Server(app)
var io = socket(http)
//var port = process.env.PORT || 6060
var port = process.env.PORT || 6060


app.get('/', (req, res)=>{
    // console.log('Get Request Received: ' + JSON.stringify(req.headers));
    res.sendFile(__dirname + '//index.html')
});
app.get('/hello', (req, res)=>{
    console.log('Get Request Received: ' + JSON.stringify(req.headers));
    res.send('<h1><i>Hello</i></h1>');
});

io.on('connection', (socket)=>{
    socket.on('chat message', (message)=>{
        io.emit('chat message', message);
    });
    // console.log('New User has connected');
});

http.listen(process.env.PORT||6060,()=>{
    console.log('Listening to port 6060');
});
