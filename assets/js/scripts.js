const players = document.querySelector("#player-names");
const button = document.querySelector('.submit-button');
const qtdEquipes = document.querySelector('.qtd-equipes');
const qtdJogadores = document.querySelector('.qtd-jogadores');

let jogadores;

function randomLuck(lista) {
    return Math.floor(Math.random() * lista.length);
}



button.addEventListener('click', function(event) {
    const numEquipes = Number(qtdEquipes.value);
    const numJogadores = Number(qtdJogadores.value);

    jogadores = players.value.split('\n');

    console.log(jogadores.length, '-> tamanho');

    for (value in jogadores) {
        const randomic = randomLuck(jogadores);

        console.log(randomic);
        console.log(jogadores);
        console.log(jogadores[randomic]);
    }
})