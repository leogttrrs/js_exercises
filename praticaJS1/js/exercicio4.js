function intervalos() {
    // Definindo os intervalos
    const intervalo1 = [30, 50];
    const intervalo2 = [60, 100];

    // Função para verificar se um número está em um intervalo
    const emIntervalo = (num, intervalo) => num >= intervalo[0] && num <= intervalo[1];

    // Lendo os números do usuário
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));

    // Verificando se os números estão nos intervalos
    let resultado1 = emIntervalo(num1, intervalo1) || emIntervalo(num1, intervalo2)
        ? `O número ${num1} está no intervalo: ${emIntervalo(num1, intervalo1) ? intervalo1 : intervalo2}.`
        : `O número ${num1} não está em nenhum dos dois intervalos.`;

    let resultado2 = emIntervalo(num2, intervalo1) || emIntervalo(num2, intervalo2)
        ? `O número ${num2} está no intervalo: ${emIntervalo(num2, intervalo1) ? intervalo1 : intervalo2}.`
        : `O número ${num2} não está em nenhum dos dois intervalos.`;

    // Exibindo os resultados
    console.log("1:");
    console.log(resultado1);
    
    console.log("2:");
    console.log(resultado2);
}
