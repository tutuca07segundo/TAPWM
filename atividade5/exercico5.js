let n1,n2,optUser; 
n1 = parseInt(prompt("1)papel \n 2)tesoura \n 3)pedra"));
n2 = Math.ceil(Math.random() * 3);
if      (n1 == 1 && n2 == 3){
    alert("voce venceu, a maquina escolheu  pedra" );
}
else if (n1 == 2 && n2 == 1){
    alert("voce venceu, a maquina escolheu papel");
}
else if (n1 == 3 && n2 == 2){
    alert("voce venceu, a maquina escolheu tesoura");
}
else if (n1 == 2 && n2 == 3){
    alert("voce perdeu, a maquina escolheu pedra");
}
else if (n1 == 1 && n2 == 2){
    alert("voce perdeu, a maquina escolheu tesoura");
}
else if (n1 == 3 && n2 == 1){
    alert("voce perdeu, a maquina escolheu papel");
}
else {
    alert("empate");
}
