let http = require('http');
let server = http.createServer( function(req,res){
    res.end("<html><body> teste de site html </body></html>")
});
server.listen(3000);