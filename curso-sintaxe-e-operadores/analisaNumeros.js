function analisaNumeros(n1, n2) {
    if (!n1 || !n2) return;

    let iguais = n1 === n2; //confere se os números são iguais
    let soma = n1 + n2
    let resultado = "";

    iguais == true ? resultado += `Os números ${n1} e ${n2} são iguais.` : resultado += `Os números ${n1} e ${n2} não são iguais.`;

    soma > 10 ? resultado += ` Sua soma é ${soma}, que é maior que 10` : resultado += ` Sua soma é ${soma}, que é menor que 10`;

    soma < 20 ? resultado += ' e menor que 20.' : ' e maior que 20.';

    return resultado;
}

console.log(analisaNumeros(10, 3));