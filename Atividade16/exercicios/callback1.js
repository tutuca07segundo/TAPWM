const prompt = require('prompt-sync')();

function saudação(nome){
    console.log('oi ' + nome);
}
function entradaNome(callback){
    let nome = prompt('digite seu nome:');
    callback(nome);
}
entradaNome(saudação)