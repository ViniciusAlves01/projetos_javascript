const pers1 = prompt("Insira do nome do primeiro personagem");
const atackPers1 = prompt("Insira os pontos de ataque do primeiro personagem");
const pers2 = prompt("Insira do nome do segundo personagem");
const vidaPers2 = prompt("Insira os pontos de vida do segundo personagem");
const defPers2 = prompt("Insira o poder de defesa do segundo personagem");
const escudo = prompt(pers2 + " possui escudo? (Sim/Não");

let dano = 0;
if (
  atackPers1 > defPers2 &&
  (escudo == "sim" || escudo == "Sim" || escudo == "SIM")
) {
  dano = (atackPers1 - defPers2) / 2;
} else if (
  atackPers1 > defPers2 &&
  (escudo == "não" || escudo == "nao" || escudo == "Não" || escudo == "Nao")
) {
  dano = atackPers1 - defPers2;
}

alert(pers1 + " causou " + dano + " pontos de dano em " + pers2);
alert(
  "Nome do atacante: " +
    pers1 +
    "\nPontos de ataque: " +
    atackPers1 +
    "\n\nNome do defensor: " +
    pers2 +
    "\nPontos de vida: " +
    Number(vidaPers2 - dano) +
    "\nPontos de defesa: " +
    defPers2 +
    "\nPossui escudo? " +
    escudo
);
