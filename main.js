const gearIcon = document.querySelector('.icon-gear');
//const hidden = [...document.querySelectorAll('.btn-hidden')];
const hidden = [...document.querySelectorAll('.hidden')];

function animation () {
  let x = document.getElementById("temario");
  if (gearIcon.classList.contains('rollIn')) {
    gearIcon.classList.remove('rollIn')
    gearIcon.classList.add('rollOut')

    /* hidden.map( btn => {
      btn.classList.remove('show');
      btn.classList.add('hidden');
    }); */
    x.style.display = "none";
  } else {
    gearIcon.classList.remove('rollOut')
    gearIcon.classList.add('rollIn')

    x.style.display = "block";

   /*  hidden.map( btn => {
      btn.classList.remove('hidden');
      btn.classList.add('show');
    }); */

  }
}

function toggle () {
  let x = document.getElementById("temario");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
gearIcon.addEventListener('click', animation);