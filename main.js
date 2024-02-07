// function editaNome() {
//     var Result = document.getElementById('result');
//     Result = Result.toUpperCase();
//     Result.style.fontWeight = 'bold';
// }

function calcular(){

    var Result = document.getElementById('result');

    var numero1 = document.querySelector('input#numero1');
    var numero2 = document.querySelector('input#numero2');
    var operacao = document.querySelector('input#operacao');

    var n1 = Number(numero1.value);
    var n2 = Number(numero2.value);
    var o = String(operacao.value);


    switch (o) {
        case '+':
            Result.innerHTML = (`O resultado da soma entre ${n1} e ${n2}, é ${n1+n2}`);
            break;

        case "-":
            Result.innerHTML = (`O resultado da subtração entre ${n1} e ${n2}, é ${n1-n2}`);
            break;

        case "*":
            Result.innerHTML = (`O resultado da multiplicação entre ${n1} e ${n2}, é ${n1*n2}`);
            break;

        case "/":
            Result.innerHTML = (`O resultado da divisão entre ${n1} e ${n2}, é ${n1/n2}`);
            break;

        default:
            Result.innerHTML = ("Escolha uma opção valida!");
    }
}
