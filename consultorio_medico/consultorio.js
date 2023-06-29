let escolha = "";
let pacientes = [];
let posicoes = ""

do {
  if (pacientes.length == 0) { //Confere se o array está vazio, caso esteja não premite com que faça outras ações além de cadastrar e sair
    escolha = prompt(
      "Bem vindo ao Consultório Médico!\n\nEscolha uma das opções abaixo: \n" +
        "1 - Cadastrar um novo paciente\n" +
        "2 - Exibir lista de espera\n" +
        "3 - Atender um paciente\n" +
        "4 - Sair\n"
    )
    switch (escolha) {
      case "1":
        pacientes.push(prompt("Insira o nome do paciente:"));
        break;
      case "2":
        alert("Não há nenhum paciente na lista de espera");
        break;
      case "3":
        alert("É necessário insirir um paciente primeiro");
        break;
      case "4":
        alert("Finalizando...");
        break;
      default:
        alert("Opção inválida");
        break
    }
  } else if(pacientes.length != 0){//Confirma que o array possui elementos inseridos para que as funções funcionem
      escolha = prompt(
        "Escolha uma opção abaixo: \n" +
          "1 - Cadastrar um novo paciente\n" +
          "2 - Exibir lista de espera\n" +
          "3 - Atender um paciente\n" +
          "4 - Sair\n"
      );
      switch (escolha) {
        case "1":
          let pacienteInserido = pacientes.push(prompt("Insira o nome do paciente"))//Insere um novo elemento(paciente) no array
          alert("O paciente " + pacienteInserido + " foi adicionado à fila de espera!")
          break
        case "2":
          posicoes = "" //Limpa a string de eibição para que não aja redundância de elementos
          for(let i = 0; i < pacientes.length; i++) {//Laço para puxar os elementos do array e inserir na string de exibição
            posicoes += (i+1) +"º - " + pacientes[i] + "\n" //Concatena os elementos
          }
            alert(posicoes) //Exibe os elementos puxados do array
            break
        case "3":
          let pacienteRemovido = pacientes.shift() //Remove o primeiro elemento do array
          alert(`O paciente ${pacienteRemovido} foi atendido com sucesso!`)
          break
        case "4":
          alert("Finalizando")
          break
        default:
          alert("Opção inválida")
          break
      }
    }
}while(escolha != 4);
