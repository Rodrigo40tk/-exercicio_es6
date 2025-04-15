// Importando Babel (caso necessário para um ambiente específico)
// Babel é um transpilador usado para converter código moderno em versões compatíveis com browsers antigos

const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Rodrigo", nota: 8 },
    { nome: "Daniela", nota: 6 },
    { nome: "Eduardo", nota: 4 }
  ];
  
  const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);
  
  const aprovados = filtrarAprovados(alunos);
  
  console.log(aprovados);