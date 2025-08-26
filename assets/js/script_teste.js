const button = document.querySelector('.submit-button');

const textarea = document.getElementById("player-names");
const contador = document.getElementById("contador");

textarea.addEventListener("input", () => {
  let linhas = textarea.value.split("\n").filter(l => l.trim() !== "").length;
  contador.textContent = `${linhas} jogador${linhas !== 1 ? 'es' : ''}`;
})


button.addEventListener('click', function(Event) {
    let equipes = [];
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
        equipes.push(groupPlayers)
        groupCount++
    }

    // Botao de compartilhamento no whatsapp
    const wppDiv = document.getElementById('wpp');
    wppDiv.innerHTML = ""
    const wppBtn = document.createElement('button');
    wppBtn.id = 'wppBtn';
    wppBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0a11.9 11.9 0 0 0-10.46 17.71L0 24l6.45-1.52A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22c-2.05 0-4.02-.61-5.7-1.76l-.41-.27-3.83.9.82-3.93-.26-.4A9.9 9.9 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.46-7.54c-.3-.15-1.77-.87-2.05-.97s-.48-.15-.68.15-.78.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.48a9.03 9.03 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.27 5.16 4.58.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
      </svg>
      `
    wppDiv.appendChild(wppBtn);

    wppBtn.onclick = function() {
      let mensagem = '🏆 Resultado do sorteio 🏆\n\n';
      equipes.forEach((time, index) => {
        mensagem += `Equipe ${index + 1}:\n`;
        let count = 1
        time.forEach(jogador => {
          mensagem += `${count} - ${jogador}\n`;
          count++
        });
        mensagem += '\n';
      });

      mensagem += 'Sorteio gerado pela timania \nAcesse o site em: https://timania.netlify.app/'

      const url = "https://wa.me/?text=" + encodeURIComponent(mensagem);
        window.open(url, "_blank");
      }

})

// function compartilharWpp(equipes) {
//   let mensagem = 'Resultado do sorteio 🏆\n\n';
//   equipes.forEach((time, index) => {
//     mensagem += `Equipe ${index + 1}:\n`;
//     time.forEach(jogador => {
//       mensagem += `- ${jogador}\n`;
//     });
//     mensagem += '\n';
//   });

//   const url = "https://wa.me/?text=" + encodeURIComponent(mensagem);
//   window.open(url, "_blank");
// }

// btn.addEventListener(function() {
//   compartilharWpp(equipes)
// })