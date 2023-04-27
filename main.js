const iniciar = document.querySelector('[data-btn="iniciar"]');
const pausar = document.querySelector('[data-btn="pausar"]');
const resetar = document.querySelectorAll('[data-btn="resetar"]');
const perdeu = document.querySelector('[data-mensagem="perdeu"]');
const tempo = document.querySelector("[data-tempo]");
const jogoContainer = document.querySelector('[data-jogo="container"]');
const localMensagemErrado = document.querySelector('[data-mensagem="errado"]');
const mensagemAcertou = document.querySelector('[data-mensagem="acertou"]');
// ---------------------------------------------------------------------------------
let audio1 = document.querySelector('[data-audio="1"]')
let audio2 = document.querySelector('[data-audio="2"]')
let audio3 = document.querySelector('[data-audio="3"]')
// ---------------------------------------------------------------
alert('Esse jogo contém música!')
alert('Tente acertar o valor de 1 a 10!')
// ---------------------------------------------------------------
resetar.forEach((reset) => {
  reset.addEventListener("click", () => {
    location.reload();
  });
});
// ---------------------------------------------------------------
iniciar.addEventListener("click", iniciaTempo);
pausar.addEventListener("click", pausaTempo);
// ---------------------------------------------------------------
let numeroAleatorio;
let i = 0;
let j = 0;
let timer;
let intervalo = 850;
// ---------------------------------------------------------------
function iniciaTempo() {
  numeroAleatorio = Math.round(Math.random() * 10);
  audio1.play();
  console.log(numeroAleatorio);
  timer = setInterval(() => {
    tempo.innerHTML = i++;
    i >= 11 ? (i = 0) : "";
    iniciar.setAttribute("disabled", "");
    pausar.removeAttribute("disabled", "");
  
  }, intervalo);
}
// ---------------------------------------------------------------
function pausaTempo() {
  console.log(numeroAleatorio);
  if (numeroAleatorio == i - 1) {
    mostraMensagem();
  } else {
    console.log(intervalo);
    let chances = 3 - j;
    j++;
    numeroAleatorio < i - 1
      ? (localMensagemErrado.innerHTML = `Numero aleatório é <br>menor que ${i - 1} , você tem ${chances} chances`)
      : (localMensagemErrado.innerHTML = `Numero aleatório é <br>maior  que ${i - 1},  você tem ${chances} chances`);
    if (chances == 0) {
      localMensagemErrado.innerHTML = `O numero era ${numeroAleatorio}`
      perder();
    }
  }
}
// ---------------------------------------------------------------
function mostraMensagem() {
  audio1.pause()
  audio3.play()
  localMensagemErrado.innerHTML = `PARABÉNS!`
  mensagemAcertou.classList.add("ativo");
  jogoContainer.classList.add("desativo");
}
// ---------------------------------------------------------------
function resetaJogo() {
  location.reload();
}
// ---------------------------------------------------------------
function perder() {
  audio1.pause();
  audio1.currentTime = 0;
  audio2.play()
  perdeu.classList.add("ativo");
  jogoContainer.classList.add("desativo");
}
// ---------------------------------------------------------------