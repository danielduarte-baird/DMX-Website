const { error } = require('console');
const express = require('express');
const { json } = require('express/lib/response');
const app = express();

const http = require('http').Server(app); 

const io = require('socket.io')(http); 

const fs = require('fs'); 
const { Socket } = require('socket.io-client');

const portus = process.env.PORT || 3000; 

var arduino;

/*
  const SerialPort = require("serialport");
  arduino = new SerialPort("/dev/cu.usbserial-14140", 9600);

  let Readline = Serial Port.parsers.Readline; 
  let parser = new Readline(); 
  arduino.pipe(parser); 

  arduino.on("open", () => {
      console.log('serial port open');
  });
*/


app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname))


io.on("connection", (socket)=>{
    fs.readFile("./scene.json", (err, dat)=>{
      socket.emit("brandNewLightboard", JSON.parse(dat))
    })
    
    socket.on("newLight", (light)={

    })
    socket.on("newPanel", (panel)={
      
    })
    socket.on("newParam", (param)={
      
    })
    socket.on("new", (lightboard)={
      
    }) 
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });



function sendByte(byte){
    arduino.write(byte);
}



http.listen(portus, () => {
    console.log(`server running at http://localhost:${portus}/`);
  });