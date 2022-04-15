// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa
// podem entrar no brinquedo.
//
// Crie uma função controleDeAcesso() que receba dois parâmetros: 
//  -> altura da pessoa;
//  -> se está acompanhada.
//
// O script deve informar se a pessoa tem acesso liberado ou não, baseado nas seguintes condições:
//  -> A pessoa deve medir mais de 1.40m e menos de 2m.
//  -> Se a pessoa medir menos de 1.40m, deverá ir acompanhada por um maior de idade.
//  -> Se a pessoa medir menos de 1.20m, não poderá ir nem acompanhada.

function controleDeAcesso(altura, vemAcompanhada){
    if(altura < 1.20){
        console.log("Não pode andar, nem acompanhada!")
    }
    if(altura > 1.20 && altura < 1.40 && vemAcompanhada == true){
        console.log("Está acompanhada, pode andar!!")
    }
    if(altura > 1.20 && altura < 1.40 && vemAcompanhada == false){
        console.log("Não pode andar sem acompanhante!!")
    } else if (altura > 1.40 && altura < 2.00){
        console.log("Pode andar tranquilo!!!")
    }
}

controleDeAcesso(1.10)
controleDeAcesso(1.35, false)
controleDeAcesso(1.35, true)
controleDeAcesso(1.90)