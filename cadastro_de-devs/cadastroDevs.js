//Criação da função que será responsável por criar label's
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}

//Criação da função que será responsável por criar input's
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

//Criação de variáveis que serão úteis ao longo do código
const devRegisters = [];
const addTechButton = document.getElementById("addTechButton");
const form = document.getElementById("form");
let inputsRows = 1;

//Atribuição de um evento ao botão para adicionar os campos de input no formulário
addTechButton.addEventListener("click", function () {
  const techRows = document.getElementById("techRows");

  const newRow = document.createElement("li");
  let rowIndex = inputsRows;
  inputsRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = 'inputRow'

  //Nome da tecnologia
  const techLabel = createLabel("Nome da Tecnologia: ", "techName - " + rowIndex);
  const techInput = createInput("techName - " + rowIndex, null, "techName");

  const techExp = createLabel("Tempo de Experiência: ");
  //Radio 1:
  const idRadio1 = 'techExpInput' + inputsRows + '.1'
  const techExpInput1 = createInput(idRadio1, "0-2 anos", "techExpInput." + rowIndex, "radio");
  const techExpLabel1 = createLabel("0-2 anos", idRadio1);
  //Radio 2:
  const idRadio2 = 'techExpInput' + inputsRows + '.2'
  const techExpInput2 = createInput(idRadio2, "2-5 anos", "techExpInput."+rowIndex, "radio");
  const techExpLabel2 = createLabel("2-5 anos", idRadio2);
  //Radio 3:
  const idRadio3 = 'techExpInput' + inputsRows + '.3'
  const techExpInput3 = createInput(idRadio3, "5+ anos", "techExpInput."+rowIndex, "radio");
  const techExpLabel3 = createLabel("5+ anos", idRadio3);

  //Botão de remover cada linha de input's
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    techRows.removeChild(newRow)
  })

  newRow.append(techLabel,techInput,techExp,techExpInput1,techExpLabel1,techExpInput2,techExpLabel2,techExpInput3,techExpLabel3, removeRowBtn);
  techRows.append(newRow);

  
});

//Atribuição do evento no botão do tipo submit
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  

  const devName = document.getElementById('devName').value
  const inputRows = document.querySelectorAll('.inputRow')

  let techs = []
  inputRows.forEach(function(row){
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id +  ' input[name="techName"]').value
    const techXp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    techs.push({techName: techName, techXp: techXp})
  })
  let newDev = {devName: devName, techs: techs}
  
  if(newDev.devName == '' || newDev.techs.techName == ''){
    alert('Insira os dados corretamente')
  }else{
    devRegisters.push(newDev)
    console.log(devRegisters)
  }
  

  document.getElementById('devName').value = ''
  inputRows.forEach(function(row){
    row.remove()
  })
})
