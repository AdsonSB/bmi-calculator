// Alteração do título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
 
// Cálculo do IMC do paciente
var paciente = document.querySelector("#primeiro-paciente");
 
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
 
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
 
var imc = peso / (altura * altura);
 
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc.toFixed(2);