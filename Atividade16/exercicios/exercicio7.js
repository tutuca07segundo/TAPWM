let http = require('http');
let server = http.createServer(function(req, res){
    let opção = req.url;
    if(opção=='/historia'){
        res.end("<html><body> historia de algo ai </body></html>")
    }
    else if(opção=='/cursos'){
        res.end("<html><body> cursos de algo ai </body></html>")
    }
    else if(opção=='/professores'){
        res.end("<html><body> professores de algo ai </body></html>")
    }
    else {
        res.end("<html><body>tela padrao</body></html>")
    }
})
server.listen(3000);