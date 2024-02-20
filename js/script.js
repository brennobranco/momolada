
const fleeButton = document.getElementById('no');

fleeButton.addEventListener('mouseover', () => {
  const newPositionX = Math.random() * (window.innerWidth - fleeButton.clientWidth);
  const newPositionY = Math.random() * (window.innerHeight - fleeButton.clientHeight);
  fleeButton.style.position = 'absolute'
  fleeButton.style.left = newPositionX + 'px';
  fleeButton.style.top = newPositionY + 'px';
});

const modal = document.querySelector('.modal')
const sim = document.querySelector('#sim')

function aparecer() {
  modal.style.display = 'flex'
  modal.animate([{transform: 'translateY(-900px)'}, {transform: 'translateY(0px)'}], {duration: 1500})
}

setTimeout(function () {
  aparecer()
}, 1500)

sim.addEventListener('click', () => {
  window.alert('Eu sei que eu sou irresitível! Mas a graça é você tentar me negar, rs.')
})
