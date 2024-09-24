function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal = undefined
    console.log(cpfInformado)
    const nonodigito = Number(cpfInformado[8]);

    const regioesFiscais = {
        1: "DF, GO, MT, MS e TO",
        2: "AC, AP, AM, PA, RO e RR",
        3: "CE, MA e PI",
        4: "AL, PB, PE e RN",
        5: "BA e SE",
        6: "MG",
        7: "ES e RJ",
        8: "SP",
        9: "PR e SC",
        0: "RS" // O algarismo zero representa a 10ª Região Fiscal
    };

    regiaoFiscal = regioesFiscais[nonodigito]
    
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
