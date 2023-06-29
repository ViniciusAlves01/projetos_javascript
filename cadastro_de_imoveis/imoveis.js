let escolha;
let listaImoveis = []; //Criação do array que armazenará o objeto

do {
  escolha = prompt(
    "Cadastro de Imóveis\n\n" +
      "Números de Imóveis cadastrados: " +
      listaImoveis.length +
      "\n" +
      "Escohla uma das opções abaixo\n" +
      "1 - Cadastrar um novo Imóvel\n2 - Exibir Imóveis cadastrados\n3 - Sair"
  );

  switch (escolha) {
    case "1":
      let imovel = {}; //Criação do objeto Imovel
      //Criação dos atributos do objeto Imovel
      imovel.Proprietario = prompt("Qual o nome do proprietário do Imóvel?");
      imovel.qntQuartos = prompt("Quantos quartos este Imóvel possui?");
      imovel.qntBanheiros = prompt("Quantos banheiros este Imóvel possui?");
      imovel.possuiGaragem = prompt("O Imóvel possui garagem? (sim/não)");
      confirm(
        //para o usuário revisar e confirmar as informações
        "Está tudo correto?\n" +
          "Proprietario: " +
          imovel.Proprietario +
          "\n" +
          "Quantidade de quartos: " +
          imovel.qntQuartos +
          "\n" +
          "Quantidade de banheiros: " +
          imovel.qntBanheiros +
          "\n" +
          "Possui garagem: " +
          imovel.possuiGaragem
      );
      if (confirm) {
        //Envia o objeto ao array caso true
        listaImoveis.push(imovel);
      }
      break;
    case "2":
      if (listaImoveis.length != 0) {
        for (let i = 0; i < listaImoveis.length; i++) {
          //Eibição das informações a partir de 'array[indice].atributo'
          alert(
            `${i + 1}º Imóvel:\n` +
              `Proprietário: ${listaImoveis[i].Proprietario}\n` +
              `Quantidade de quartos: ${listaImoveis[i].qntQuartos}\n` +
              `Quantidade de banheiros: ${listaImoveis[i].qntBanheiros}\n` +
              `Possui garagem: ${listaImoveis[i].possuiGaragem}`
          );
        }
      } else {
        alert("Não há imóveis cadastrados para serem exibidos!");
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção invalida");
  }
} while (escolha != "3");
