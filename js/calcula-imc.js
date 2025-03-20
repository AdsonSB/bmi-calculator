// Cálculo do IMC do paciente
var pacientes = document.querySelectorAll(".paciente");
 
for (var i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    // var tdPeso = paciente.querySelector(".info-peso");
    // var peso = tdPeso.textContent;  ---> foi reduzindo em uma linha com a mescla das variaveis.
    
    var peso = paciente.querySelector(".info-peso").textContent;

    // var tdAltura = paciente.querySelector(".info-altura");
    // var altura = tdAltura.textContent; ------> foi reduzido em uma linha com a mescla das variaveis.

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");
 
    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);
 
    
    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!"
    }
 
    
    if (!alturaEhValida) {
        tdImc.textContent = "Altura inválida!";
    }
 
    if (!pesoEhValido && !alturaEhValida) {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
 
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
 
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 600){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3){
        return true;
    } else {
        return false;
    }
}