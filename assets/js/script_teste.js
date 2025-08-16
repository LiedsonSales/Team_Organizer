const button = document.querySelector('.submit-button');

const textarea = document.getElementById("player-names");
  const contador = document.getElementById("contador");

  textarea.addEventListener("input", () => {
    let linhas = textarea.value.split("\n").filter(l => l.trim() !== "").length;
    contador.textContent = `${linhas} jogador${linhas !== 1 ? 'es' : ''}`;
  })
  
button.addEventListener('click', function(Event) {
    let players = document.getElementById('player-names').value
    .split('\n')
    .map(p => p.trim())
    .filter(p => p !== '')

    let teamSize = parseInt(document.querySelector('.qtd-jogadores').value);

    if (players.length < teamSize) {
        alert('Quantidade de jogadores insuficiente para formar um time!')
        return
    }

    players = players.sort(() => Math.random() - 0.5);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    let groupCount = 1
    while (players.length > 0) {
        let groupPlayers = players.splice(0, teamSize);
        let groupDiv = document.createElement('div');
        groupDiv.classList.add('group');
        groupDiv.innerHTML = `<h3>Time ${groupCount}</h3><p>${groupPlayers.join(', ')}</p>`
        resultDiv.appendChild(groupDiv)
        groupCount++
    }
})