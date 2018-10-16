const gearIcon = document.querySelector('.icon-gear');
const hidden = [...document.querySelectorAll('.btn-hidden')];

function animation (e) {
  console.log('clicked');
  if (gearIcon.classList.contains('rollIn')) {
    gearIcon.classList.remove('rollIn')
    gearIcon.classList.add('rollOut')
    hidden.map( btn => {
      btn.classList.remove('btn-display');
      btn.classList.add('btn-hidden');
    })
  } else {
    gearIcon.classList.remove('rollOut')
    gearIcon.classList.add('rollIn')
    hidden.map( btn => {
      btn.classList.remove('btn-hidden');
      btn.classList.add('btn-display');
    })
  }
}
gearIcon.addEventListener('click', animation);