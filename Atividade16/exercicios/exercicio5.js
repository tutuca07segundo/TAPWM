let eventos = require('events');

let emissorEventos = eventos.EventEmitter;


let ee = new emissorEventos();

ee.on('dados',function(fecha){
    console.log(fecha);
})

ee.emit('dados','primeira vez '+Date.now)

setInterval(function(){
    ee.emit('dados',Date.now());
},500)