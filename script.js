function verificar(respostaCorreta, feedbackId, fotoId, proximaId) {
    let resposta = document.getElementById('resposta').value.toLowerCase().trim();
    let feedback = document.getElementById(feedbackId);
    let foto = document.getElementById(fotoId);
    let proxima = document.getElementById(proximaId);

    if(resposta === respostaCorreta) {
        feedback.innerHTML = "✅ Acertou, amor! 💕";

        // Explosão de corações
        for(let i=0; i<30; i++) {
            setTimeout(() => criarCoracaoExplosao(), i*30);
        }

        // Mostra a foto após 500ms
        setTimeout(() => {
            foto.classList.add("show");
            proxima.style.display = "inline";
        }, 500);
    } else {
        feedback.innerHTML = "❌ Tenta de novo, amor 😘";
    }
}

// Função de criar corações na explosão
function criarCoracaoExplosao() {
    const cor = document.createElement("div");
    cor.innerHTML = "❤️";
    cor.style.position = "absolute";
    cor.style.left = Math.random() * window.innerWidth + "px";
    cor.style.top = Math.random() * window.innerHeight/2 + "px";
    cor.style.fontSize = (10 + Math.random()*20) + "px";
    cor.style.pointerEvents = "none";
    cor.style.opacity = 1;
    document.body.appendChild(cor);

    let top = parseFloat(cor.style.top);
    let opacity = 1;
    const interval = setInterval(()=>{
        top -= 2; // sobe para cima
        opacity -= 0.03;
        cor.style.top = top + "px";
        cor.style.opacity = opacity;
        if(opacity <= 0){
            document.body.removeChild(cor);
            clearInterval(interval);
        }
    },10);
}

// Flores (emoji 🌸) caindo em todas as páginas
function criarFlorEmoji() {
  const flor = document.createElement("div");
  flor.innerHTML = "🌸";
  flor.style.position = "absolute";
  flor.style.left = Math.random() * window.innerWidth + "px";
  flor.style.top = "-50px";
  flor.style.fontSize = (20 + Math.random()*30) + "px";
  flor.style.pointerEvents = "none";
  flor.style.opacity = 0.8;
  document.body.appendChild(flor);

  let top = -50;
  const interval = setInterval(() => {
    top += 1.5;
    flor.style.top = top + "px";
    if(top > window.innerHeight){
      flor.remove();
      clearInterval(interval);
    }
  }, 10);
}
setInterval(criarFlorEmoji, 300);

// Música de fundo
const audio = document.getElementById("bg-music");
if(audio){
  document.addEventListener("click", ()=> audio.play());
}
