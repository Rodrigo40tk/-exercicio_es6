"use strict";

var alunos = [{
  nome: "Ana",
  nota: 7
}, {
  nome: "Bruno",
  nota: 5
}, {
  nome: "Rodrigo",
  nota: 8
}, {
  nome: "Daniela",
  nota: 6
}, {
  nome: "Eduardo",
  nota: 4
}];
var filtrarAprovados = function filtrarAprovados(lista) {
  return lista.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var aprovados = filtrarAprovados(alunos);
console.log(aprovados);