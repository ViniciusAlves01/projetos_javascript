let escolha;
let baralho = [];
let cartasAtualmente = 0;
do {
  escolha = prompt(
    "Baralho de cartas!\n\n" +
      "Quantidade de cartas atualmente: " +
      baralho.length +
      "\n" +
      "Escolha uma das opções abaixo:\n" +
      "1 - Inserir uma carta\n" +
      "2 - Puxar uma carta\n" +
      "3 - Sair"
  );

  switch (escolha) {
    case "1":
      baralho.push(
      prompt("Insira o nome da carta que deseja inserir no baralho:")
      );
      alert("Carta adicionada!");
      break;
    case "2":
      if (baralho.length != 0) {
        let cartaRemovida = baralho.pop();
        alert("A carta " + cartaRemovida + " foi removida com sucesso!");
      } else {
        alert("Não há nenhuma carta no baralho para ser removida!");
      }
      break;
    case "3":
      alert("Finalizando");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (escolha != 3);
