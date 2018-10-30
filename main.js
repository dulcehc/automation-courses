const gearIcon = document.querySelector('.icon-gear');
const hidden = [...document.querySelectorAll('.btn-hidden')];

function animation () {
  if (gearIcon.classList.contains('rollIn')) {
    gearIcon.classList.remove('rollIn')
    gearIcon.classList.add('rollOut')

    setTimeout(function(){
      hidden.map( btn => {
        btn.classList.remove('btn-display');
        btn.classList.add('btn-hidden');
        btn.style.animationName = 'hideButtons';

      });
    }, 5000)
  } else {
    gearIcon.classList.remove('rollOut')
    gearIcon.classList.add('rollIn')
    setTimeout(function(){
      hidden.map( btn => {
        btn.classList.remove('btn-hidden');
        btn.classList.add('btn-display');
      });
    }, 5000);
   /*  hidden.map( btn => {
      btn.classList.remove('btn-hidden');
      btn.classList.add('btn-display');
    }) */
  }
}
gearIcon.addEventListener('click', animation);