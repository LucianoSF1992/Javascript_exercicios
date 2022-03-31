/*Olá, você foi contratado para executar este projeto.
 É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
  Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
 Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

// Microondas Super Veloz
// Comidas
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

//  Função Microondas Super Veloz
function microondas(comidas, tempo) {
// Usando switch para vericar a comida e o tempo inseridos !
    switch(comidas) {
        case "pipoca" :
            if (tempo < pipoca) // Limitando meu tempo menor do que 10 segundos !
            console.log(`Tempo insuficiente !!!`);
            else if (tempo >= 10 && tempo <= 19) // Limitando meu tempo entre 10 e 19 segundos !
            console.log(`${comidas} pronto(a), bom apetite !!!`);
            else if (tempo >= 20 && tempo <= 29) // Limitando meu tempo ente 20 e 29 segundos !
            console.log(`A comida(${comidas}) queimou !!!`);
            else 
            console.log(`Kabummm !!!`) // Toda excessão de tempo superior ao pedido acima !
        break;
        case "macarrao" :
            if (tempo < 8) // Limitando meu tempo menor do que 8 segundos !
            console.log(`Tempo insuficiente !!!`);
            else if (tempo >= 8 && tempo <= 15) // Limitando meu tempo entre 8 e 15 segundos !
            console.log(`${comidas} pronto(a), bom apetite !!!`);
            else if (tempo >= 16 && tempo <= 23) // Limitando meu tempo entre 16 e 23 segundos !
            console.log(`A comida(${comidas}) queimou !!!`);
            else 
            console.log(`Kabummm !!!`) // Toda excessão de tempo superior ao pedido acima !
        break;
        case "carne" :
            if (tempo < 15) // Limitando meu tempo menor do que 15 segundos !
            console.log(`Tempo insuficiente !!!`);
            else if (tempo >= 15 && tempo <= 29) // Limitando meu tempo entre 15 e 29 segundos !
            console.log(`${comidas} pronto(a), bom apetite !!!`);
            else if (tempo >= 30 && tempo <= 44) // Limitando meu tempo ente 30 e 44 segundos !
            console.log(`A comida(${comidas}) queimou !!!`);
            else 
            console.log(`Kabummm !!!`) // Toda excessão de tempo superior ao pedido acima !
        break;
        case "feijao" :
            if (tempo < 12) // Limitando meu tempo menor do que 12 segundos !
            console.log(`Tempo insuficiente !!!`);
            else if (tempo >= 12 && tempo <= 23) // Limitando meu tempo entre 12 e 23 segundos !
            console.log(`${comidas} pronto(a), bom apetite !!!`);
            else if (tempo >= 24 && tempo <= 35) // Limitando meu tempo ente 24 e 35 segundos !
            console.log(`A comida(${comidas}) queimou !!!`);
            else 
            console.log(`Kabummm !!!`) // Toda excessão de tempo superior ao pedido acima !
        break;
        case "brigadeiro" :
            if (tempo < 8) // Limitando meu tempo menor do que 10 segundos !
            console.log(`Tempo insuficiente !!!`);
            else if (tempo >= 8 && tempo <= 15) // Limitando meu tempo entre 10 e 19 segundos !
            console.log(`${comidas} pronto(a), bom apetite !!!`);
            else if (tempo >= 16 && tempo <= 23) // Limitando meu tempo ente 20 e 29 segundos !
            console.log(`A comida(${comidas}) queimou !!!`);
            else 
            console.log(`Kabummm !!!`) // Toda excessão de tempo superior ao pedido acima !
        break;
        default:
            return console.log(`Prato inexistente !!!`) // Qualquer prato que não esteja listado no switch !
    }
} 
// Comida e tempo !
microondas("detergente", 0); 
microondas("macarrao", 10);
microondas("carne", 30);
microondas("feijao", 30);
microondas("brigadeiro", 40);