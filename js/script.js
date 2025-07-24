const firstModal = document.querySelector('.modal');
const secondModal = document.querySelector(".photos-container");
const sim = document.querySelector('#sim');
const fleeButton = document.getElementById('no');
const musica = document.getElementById('musica');

const noMessage = {
  0: "Ta de sacanagem????",
  1: "caralho, me odeia muito",
  2: "Nossa, Maria, sério??",
  3: "Pede pra outro fazer sitezinho pra você então",
  4: "Tchau!!!!!!!!!!!!!",
  5: ":/"
}

let noCount = 0;
let noMessageCount = 0;

fleeButton.addEventListener('mouseover', () => {
  document.body.appendChild(fleeButton);
  const newPositionX = Math.random() * (window.innerWidth - fleeButton.clientWidth);
  const newPositionY = Math.random() * (window.innerHeight - fleeButton.clientHeight);
  fleeButton.style.position = 'absolute';
  fleeButton.style.zIndex = '100';

  if (noCount == 6) {
    window.alert(noMessage[noMessageCount]);
    noCount = 0;
    noMessageCount++;
    return;
  }

  fleeButton.style.left = newPositionX + 'px';
  fleeButton.style.top = newPositionY + 'px';
  noCount++;
});

function aparecer(modal) {
  modal.style.display = 'flex';
  modal.animate([{ transform: 'translateY(-900px)' }, { transform: 'translateY(0px)' }], { duration: 1500 });
}

function esconder(modal) {
  modal.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(1080px)' }], { duration: 1300 });
  fleeButton.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(1080px)' }], { duration: 1300 });
  setTimeout(() => {
    modal.style.display = 'none';
    fleeButton.style.display = 'none';
  }, 1279);
}

setTimeout(() => aparecer(firstModal), 1000);

sim.addEventListener('click', () => {
  musica.play();
  esconder(firstModal);
  setTimeout(() => aparecer(secondModal), 1400);
})
