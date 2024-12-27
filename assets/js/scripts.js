const players = document.querySelector("#player-names");
const button = document.querySelector('.submit-button');
const qtdEquipes = document.querySelector('.qtd-equipes');
const qtdJogadores = document.querySelector('.qtd-jogadores');
const body = document.querySelector('.body');


function randomChoice(lista) {
    return Math.floor(Math.random() * lista.length);
}


function criaEquipes(equipes, times) {
    for (let i = 1;i <= equipes; i++) {
        times.push([]);
    }
    return times;
}

function criaSection() {
    const section = document.createElement('section');
    section.setAttribute('class', 'section-02');
    body.appendChild(section);
    return section;
}


button.addEventListener('click', function(event) {
    criaSection();

    const numEquipes = Number(qtdEquipes.value);
    const numJogadores = Number(qtdJogadores.value);

    let jogadores = players.value.split('\n');

    const times = [];
    criaEquipes(numEquipes, times);
    console.log(times)
    // try {
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
    // } catch {
    //     console.log(TypeError());
    // };
    
    console.log(times);

    const valoresFiltrados = times.filter(valores => valores);


})