// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa
// podem entrar no brinquedo.
//
// Crie uma função controleDeAcesso() que receba dois parâmetros: 
//  -> altura da pessoa;
//  -> se está acompanhada.

let idade = 19;
let acesso = " ";

if(idade < 16){
    acesso = "Acesso Proibido!";
} else if (idade >= 16 && idade <= 18) {
    acesso = "Acesso liberado com acompanhente maior de idade.";
} else {
    acesso = "Acesso liberado!";
}

console.log(acesso)

function controleDeAcesso (idade){
    if(idade < 16){
        console.log("Acesso Proibido!");
    } else if (idade >= 16 && idade <= 18) {
        console.log("Acesso liberado com acompanhante maior de idade.");
    } else {
        console.log("Acesso liberado!");
    }
}
controleDeAcesso(15)
controleDeAcesso(17)
controleDeAcesso(19)