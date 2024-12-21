const players = document.querySelector("#player-names");
const button = document.querySelector('.submit-button');
const qtdEquipes = document.querySelector('.qtd-equipes');
const qtdJogadores = document.querySelector('.qtd-jogadores');


function randomChoice(lista) {
    return Math.floor(Math.random() * lista.length);
}


function criaEquipes(equipes, times) {
    for (let i = 1;i <= equipes; i++) {
        times.push([]);
    }
    return times
}

let jogadores;
button.addEventListener('click', function(event) {
    const numEquipes = Number(qtdEquipes.value);
    const numJogadores = Number(qtdJogadores.value);

    jogadores = players.value.split('\n');

    const times = [];
    criaEquipes(numEquipes, times);
    console.log(times)

    let nomes;
    let indice = 0;
    for (let i = 0;i = jogadores.length; i++) {
        const randomic = randomChoice(jogadores);

        nomes = jogadores.splice(randomic, 1).join();

        times[indice].push(nomes);
        if (times[indice].length == numJogadores) {
            indice++;
        }
    };

    const valoresFiltrados = times.filter(valores => valores);

    console.log(valoresFiltrados);
})