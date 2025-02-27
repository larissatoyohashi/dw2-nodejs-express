
// EXERCICIO 01  - FUNÇÃO SIMPLES

function apresentacao (){
    console.log("Larissa, 23, Registro");
}
apresentacao();

// EXERCICIO 02 - FUNÇÃO COM PARÂMETROS

function divisao(n1, n2) {
    let result = n1 / n2;
    console.log(`O resultado da divisão foi ${result}`);
}

let n1 = 6;
let n2 = 2;
divisao(n1,n2);


// EXERCICIO 03 - FUNÇÃO COM RETORNO

    function multiplicacao(n1, n2, n3){
        return n1 * n2 * n3;
    }

    console.log(`A multiplicação dos tres valores foi ${multiplicacao(2,2,2)}`)

// EXERCICIO 04 - FUNÇÃO COM MAIS DE UM RETORNO

    function idade(n) {
        if (n >= 18) {
            return "Maior de Idade";
        } else {
            return "Menor de Idade";
        }
    }

    let id = 20;
    console.log(`A pessoa com ${id} anos é ${idade(id)}`);

    // EXERCÍCIO 05 - FUNÇÃO ANONIMA

    let resultado = function (x){
        if (x <= 5){
            return "Reprovado"
        } else {
            return "Aprovado"
        }
    }
        x = (10 + 10)/ 2
        console.log(`O aluno está ${resultado(x)}`)
        
    

    // EXERCÍCIO 06 - ARROW FUNCTION COM PARÂMETRO ÚNICO

    const Triplo = (x) => {
        return x * 3;
      };

      console.log(`O triplo do número é: ${Triplo(10)}`);
    
// EXERCÍCIO 07 - ARROW FUNCTION COM MAIS DE UM PARÂMETRO

    const calc = (num1,num2, num3, num4) => {
        return num1 + num2 + num3 + num4
    };
    console.log(`O resultado da operação é: ${calc(2,2,2,2)}`)

// EXERCÍCIO 08 - IIFE

const start = (function(nome){
    console.log(`Olá, ${nome}! Seja Bem-Vindo(a)!`)
})
("Larissa")
    
        


