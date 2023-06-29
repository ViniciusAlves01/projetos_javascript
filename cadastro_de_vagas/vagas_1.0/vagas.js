executar(); //Execução da função principal

function executar() {
  let vagasDisponiveis = []; //Criação do vetor que armazenará todas as vagas
  let escolha = "";
  do {
    escolha = Menu(); //Escolha recebe o return de 'Menu()'
    switch (escolha) {
      case "1":
        if (vagasDisponiveis.length != 0) {
          //Verifica se há dados dentro do array, para então exibi-los com a função 'listarVagas()', passando como parâmetro o array 'vagasDisponiveis'
          listarVagas(vagasDisponiveis);
        } else {
          alert("Não há vagas disponíveis no momento");
        }
        break;
      case "2":
        let vaga = {}; //Cria o objeto 'vaga'
        vaga = criarVaga(); //O objeto 'vaga' recebe o retorno da função 'criarVaga'
        if (vaga != 0) {
          //Confere se o objeto 'vaga' está preenchido
          vagasDisponiveis.push(vaga);
        }
        break;
      case "3":
        visualizarUmaVaga(vagasDisponiveis);
        break;
      case "4":
        inserirUmCandidato(vagasDisponiveis);
        break;
      case "5":
        excluirVaga(vagasDisponiveis);
        break;
      case "6":
        alert("Finalizando");
        break;
      default:
        alert("Opção inválida");
        break;
    }
  } while (escolha !== "6");
}
function Menu() {
  return prompt(
    "Cadastro de vagas\n\n" +
      "Escolha uma das opções abaixo:\n" +
      "1 - Exibir vagas disponíveis\n" +
      "2 - Criar uma nova vaga\n" +
      "3 - Visualizar uma vaga\n" +
      "4 - Inscrever um candidato em uma vaga\n" +
      "5 - Excluir uma vaga\n" +
      "6 - Sair\n"
  );
}

function criarVaga() {
  let vaga = {};
  vaga.nome = prompt("Insira um nome para a nova vaga:");
  vaga.descricao = prompt("Insira uma descrição para a nova vaga:");
  vaga.dataLimite = prompt("Insira a data final de disponibilidade da vaga:");
  vaga.totalCadidatos = 0;
  vaga.nomeCandidatos = "";
  let confirmacao = confirm(
    `Confira se está tudo correto:\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
  );
  if (confirmacao) {
    alert("Vaga cadastrada com sucesso!");
    return vaga;
  } else {
    alert("Criação de vaga cancelada. Voltando para o menu.");
    return 0;
  }
}

function listarVagas(vagasDisponiveis) {
  for (let i = 0; i < vagasDisponiveis.length; i++) {
    alert(
      `Vaga ${i + 1}\n` +
        `Índice da vaga ${i + 1}:\n` +
        `Nome da vaga: ${vagasDisponiveis[i].nome}\n` +
        `Descrição da vaga: ${vagasDisponiveis[i].descricao}\n` +
        `Data limite: ${vagasDisponiveis[i].dataLimite}\n` +
        `Numero de candidatos: ${vagasDisponiveis[i].totalCadidatos}\n` +
        `Nome dos candidatos: ${vagasDisponiveis[i].nomeCandidatos}`
    );
  }
}

function visualizarUmaVaga(vagasDisponiveis) {
  let indice = prompt("Digite o índice da vaga:");
  if (vagasDisponiveis.length != 0 && indice <= vagasDisponiveis.length) {
    //Confere se o indice existe dentro no array
    alert(
      //Exibe a vaga selecionada
      `Vaga do índice ${indice}:\n` +
        `Nome da vaga: ${vagasDisponiveis[indice - 1].nome}\n` +
        `Descrição da vaga: ${vagasDisponiveis[indice - 1].descricao}\n` +
        `Data limite: ${vagasDisponiveis[indice - 1].dataLimite}\n` +
        `Numero de candidatos: ${
          vagasDisponiveis[indice - 1].totalCadidatos
        }\n` +
        `Nome dos candidatos: ${vagasDisponiveis[indice - 1].nomeCandidatos}`
    );
  } else {
    alert("Esse indice não existe!");
  }
}

function inserirUmCandidato(vagasDisponiveis) {
  if (vagasDisponiveis.length != 0) {
    let nomeCandidato = prompt("Nome do candidato:");
    let indice = prompt("Indice da vaga desejada:");
    if (indice <= vagasDisponiveis.length) {
      vagasDisponiveis[indice - 1].nomeCandidatos += nomeCandidato;
      vagasDisponiveis[indice - 1].nomeCandidatos += ", ";
      vagasDisponiveis[indice - 1].totalCadidatos++;
      alert("O candidato " + nomeCandidato + " foi inscrevido com sucesso!");
    } else {
      alert("Índice não existente. Cancelando inscrição");
    }
  } else {
    alert("Não há vagas disponíveis no momemento");
  }
}

function excluirVaga(vagasDisponiveis) {
  if (vagasDisponiveis.length != 0) {
    let i = prompt("Digite o índice da vaga que deseja excluir:");
    let confirmacao = confirm(
      `Tem certeza que deseja excluir a seguinte vaga: \n` +
        `Nome da vaga: ${vagasDisponiveis[i - 1].nome}\n` +
        `Descrição da vaga: ${vagasDisponiveis[i - 1].descricao}\n` +
        `Data limite: ${vagasDisponiveis[i - 1].dataLimite}\n` +
        `Numero de candidatos: \n` +
        `Nome dos candidatos: ${vagasDisponiveis[i - 1].nomeCandidatos}`
    );
    if (confirmacao) {
      vagasDisponiveis.splice(i - 1, 1);
      alert("Vaga excluida com sucesso!");
    } else {
      alert("Exclusão cancelada. Voltando ao menu");
    }
  } else {
    alert("Não há vagas para serem excluídas");
  }
}
