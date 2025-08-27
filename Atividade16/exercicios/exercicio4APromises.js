function parte1(){
    for(let i = 1;i<=10;i++){
        console.log("primeira parte: " + i);
    }
}

setTimeout(parte1,2000)

const fs = require('fs').promises;
fs.readFile('file.txt','utf8')
    .then(data =>{
        const registros = data.split('\n');
        registros.forEach((registro,index) => {
            console.log("   segunda parte: " + registro + " " + index);
        });
    })
    .catch(err => {
        console.error("erro ao ler arquivo: ",err)
    });