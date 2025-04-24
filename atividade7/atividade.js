let l1,l2,l3; // lado 1 2...
let triangulo = true;
l1 = parseInt(prompt("informe o primeiro lado do triagulo"));
l2 = parseInt(prompt("informe o segundo lado do triagulo"));
l3 = parseInt(prompt("informe o terceiro lado do triagulo"));
triangulo = (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2);
if(triangulo){
    if(l1 == l2 && l1 == l3) {
        alert("é equilatero")
    }
    else if (l1 == l2 || l1 == l3){
        alert("é isoceles")
    }
    else{
        alert("é escaleno")
    }

    
}
else{

    alert("nem é um triangulo")
}
