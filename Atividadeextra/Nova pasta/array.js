//arr = [...arguments]

function operaArray(){
    let numeros = [...arguments]
    let somatoria = 0
    let quad1,quad2
    for (i=0; i<numeros.length;i++){
        somatoria += numeros[i]
    }
    quad1 = numeros[0] * numeros[0];
    quad2 = numeros[1] * numeros[1];
    alert("a somatoria é " + somatoria + " o quadrado do primeiro é : " + quad1 + " e do segundo é :" + quad2)

}
function inicOpera(){
    let tam = parseInt(prompt("informe o tamanho do array"))
    let nums = []
    for(i = 0; i<tam;i++){
        nums[i] = parseInt(prompt("informe o valor da posição " + i))
    }
    operaArray.apply(null,nums)
}

function embaralha(){
    let letras=[...arguments];
    let palavras = []
    palavras[0] = letras[0] + letras[2] + letras[4] + letras[3] + letras[1];
    palavras[1] = letras[4] + letras[1] + letras[3] + letras[2] + letras[0];
    palavras[2] = letras[2] + letras[3] + letras[1] + letras[4] + letras[0];
    palavras[3] = letras[1] + letras[4] + letras[0] + letras[2] + letras[3];
    palavras[4] = letras[3] + letras[0] + letras[2] + letras[4] + letras[1];

    palavras[1] = letras[1] + letras[4] + letras[3] + letras[2] + letras[0];
    palavras[1] = letras[2] + letras[3] + letras[4] + letras[0] + letras[1];
    palavras[2] = letras[4] + letras[2] + letras[3] + letras[1] + letras[0];
    palavras[3] = letras[0] + letras[3] + letras[4] + letras[2] + letras[1];
    palavras[4] = letras[4] + letras[3] + letras[2] + letras[1] + letras[0];
    // sei que ad ho não
    alert(palavras)
}
function inicEmbaralha(){
    let letrasEntrada = []
    letrasEntrada[0] = prompt("informe a primeira letra");
    letrasEntrada[1] = prompt("informe a segunda letra");
    letrasEntrada[2] = prompt("informe a terceira letra");
    letrasEntrada[3] = prompt("informe a quarta letra");
    letrasEntrada[4] = prompt("informe a quinta letra");
    embaralha.apply(null,letrasEntrada);
}
