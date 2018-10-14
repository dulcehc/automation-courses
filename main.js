const gearIcon = document.querySelector('.icon-gear');
const hidden = [...document.querySelectorAll('.btn-hidden')];

function animation () {
  console.log('clicked');
  gearIcon.style.animationName = 'gears';
  gearIcon.style.animationDuration = '10s';
  gearIcon.style.animationFillMode = 'forwards';
  hidden.map( btn => {
      btn.classList.remove('btn-hidden');
      btn.classList.add('btn-display');
  })

}
gearIcon.addEventListener('click', animation);