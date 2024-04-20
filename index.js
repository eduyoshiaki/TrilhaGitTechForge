let a = (6)
let b = (8)

let soma = (a + b)

console.log("Resultado da soma: ", soma);

function verificaNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é impar.");
    }
}

verificaNumero(5);
verificaNumero(2);
verificaNumero(14);
verificaNumero(9);
verificaNumero(6);

let stringAqui = ("em dezembro de 81");

console.log("comprimento da string: ", stringAqui.length);

let stringMaiuscula = stringAqui.toUpperCase();

console.log("string em maiúsculo: ", stringMaiuscula);

let palavras = stringAqui.split(" ")

console.log("palavras na string")
palavras.forEach(function(palavra) {
    console.log(palavra);
});