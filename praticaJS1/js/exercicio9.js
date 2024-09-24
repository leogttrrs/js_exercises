function haOnzeDigitos(cpf) {
    if (cpf.length === 11) {
        return true
    }  
    return false
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    for (let i =0; i<11 ; i++) {
        if (isNaN(Number(cpf[i]))) {
            return false
        }
    }
    return true
}

function osOnzeNumerosSaoDiferentes(cpf) {
    let numeros = [];

    for (let i =0; i<11 ; i++) {
        if (!numeros.includes(cpf[i])) {
            numeros.push(cpf[i]);
        }
    }
    
    if (numeros.length === 1) {
        return false;
    }

    return true;
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    let soma = 0;
    let ponteirocpf = 0;

    for (let i = 10; i>1 ; i--) {
        soma += Number(cpf[ponteirocpf])*i
        ponteirocpf += 1;
    }
    soma *= 10;
    let resto = soma%11;

    if (resto === 10) {
        resto = 0
    }

    if (resto === Number(cpf[9])) {
        return true;
    }

    return false;
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    let soma = 0;
    let ponteirocpf = 0;

    for (let i = 11; i>1 ; i--) {
        soma += Number(cpf[ponteirocpf])*i
        ponteirocpf += 1;
    }
    soma *= 10;
    let resto = soma%11;

    if (resto === 10) {
        resto = 0
    }

    if (resto === Number(cpf[10])) {
        return true;
    }

    return false;
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}