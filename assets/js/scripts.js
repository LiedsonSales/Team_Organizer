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
    let nomes;

    for (let i = 0; jogadores.length; i++) {
        const randomic = randomLuck(jogadores);
        console.log(jogadores);

        nomes = jogadores.splice(randomic, 1).join();
        
        console.log(randomic, '-> índice');
        console.log(nomes)
    }
})