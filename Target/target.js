let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

// Soma = 91

//---------------------------------//

//Os números de Fibonacci são, portanto, os números que compõem a seguinte sequência (A000045 na OEIS): 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584


function numeroFibonacci(number) {
    let a = 0;
    let b = 1;

    while (b <= number) {
        if (b === number) {
            return true;
        }
        
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

const numeroInformado = 21;

if (numeroFibonacci(numeroInformado)) {
    console.log(`pertence à sequência de Fibonacci.`);
} else {
    console.log(`não pertence à sequência de Fibonacci.`);
}

//---------------------------------//

/*
 a) 1, 3, 5, 7, 9 (7+2=9)
 b) 2, 4, 8, 16, 32, 64, 128 (64*2=128)
 c) 0, 1, 4, 9, 16, 25, 36, 49 (7^2=49)
 d) 4, 16, 36, 64, 64 (8^2=64)
 e) 1, 1, 2, 3, 5, 8, 13 (5 + 8 = 13)
 f) 2, 10, 12, 16, 17, 18, 19, 20 (19+1=20)
*/

//---------------------------------//

/*

Na sala 2, deixe ligado o interruptor 1 por 10 minutos, deliga e depois ligamos o interruptor 2, agora ir ate a primeira sala, A lampada acessa vai ser a que conrresponde ao interruptor 2, a lampada que estiver que ao interruptor 1, a que resta interruptor 3.

 */

//---------------------------------//

function Inverte(str) {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringOriginal = "Target";
const stringInvertida = Inverte(stringOriginal);
console.log(stringInvertida);

//---------------------------------//