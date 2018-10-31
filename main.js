const gearIcon = document.querySelector('.icon-gear');
const hidden = [...document.querySelectorAll('.btn-hidden')];

function animation () {
  if (gearIcon.classList.contains('rollIn')) {
    gearIcon.classList.remove('rollIn')
    gearIcon.classList.add('rollOut')

    setTimeout(function(){
      hidden.map( btn => {
        btn.classList.remove('btn-display');
        //btn.classList.add('btn-hidden');
        btn.classList.add('hideButtons');
        //btn.style.animationName = 'hideButtons';

      });
    }, 1000)
  } else {
    gearIcon.classList.remove('rollOut')
    gearIcon.classList.add('rollIn')
    setTimeout(function(){
      hidden.map( btn => {
        btn.classList.remove('btn-hidden');
        btn.classList.add('btn-display');
      });
    }, 2000);
   /*  hidden.map( btn => {
      btn.classList.remove('btn-hidden');
      btn.classList.add('btn-display');
    }) */
  }
}
gearIcon.addEventListener('click', animation);