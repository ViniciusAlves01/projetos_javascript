executar();
//Função principal
function executar() {
  let escolha = "";
  let formaGeometrica = "";
  do {
    let resultado = "";
    escolha = Menu();
    switch (escolha) {
      case "1":
        resultado = areaTriangulo();
        formaGeometrica = "Triângulo";
        break;
      case "2":
        resultado = areaRetangulo();
        formaGeometrica = "Retângulo";
        break;
      case "3":
        resultado = areaQuadrado();
        formaGeometrica = "Quadrado";
        break;
      case "4":
        resultado = areaTrapezio();
        formaGeometrica = "Trapézio";
        break;
      case "5":
        resultado = areaCírculo();
        formaGeometrica = "Cículo";
        break;
      case "6":
        alert("Finalizando...");
        break;
      default:
        alert("Opção inválida");
        break;
    }
    if (resultado.length != 0) {
      alert(`A área do ${formaGeometrica} é igual a: ${resultado}`);
    }
  } while (escolha !== "6");
}

//Função para o menu
function Menu() {
  return prompt(
    "Calculadora Geométrica\n\n" +
      "1 - Calcular a área do Triângulo\n" +
      "2 - Calcular a área do Retângulo\n" +
      "3 - Calcular a área do Quadrado\n" +
      "4 - Calcular a área do Trapézio\n" +
      "5 - Calcular a área do Círculo\n" +
      "6 - Sair\n"
  );
}
//Funções de calculo
function areaTriangulo() {
  const base = Number(prompt("Digite a base do Triângulo:"));
  const altura = Number(prompt("Digite a altura do Triângulo:"));
  return (base * altura) / 2;
}
function areaRetangulo() {
  const base = Number(prompt("Digite a base do Retângulo:"));
  const altura = Number(prompt("Digite a altura do Retângulo:"));
  return base * altura;
}
function areaQuadrado() {
  const lado = Number(prompt("Digite o lado do Quadrado:"));
  return lado * lado;
}
function areaTrapezio() {
  const baseMaior = Number(prompt("Digite a base maior do Trapézio:"));
  const baseMenor = Number(prompt("Digite a base menor do Trapézio:"));
  const altura = Number(prompt("Digite a altura do Trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaCírculo() {
  const raio = Number(prompt("Digite o raio do Círculo:"));
  return raio * raio * 3.14;
}
