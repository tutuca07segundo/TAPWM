function exibeMensagensNaOrdem(mensagem,callback){
    console.log(mensagem)
    callback();
}
exibeMensagensNaOrdem('essa é a primeira mensagem exibida na ordem',function(){
    console.log('essa é a segunda mensagem exibida na ordem')
})