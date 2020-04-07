
// //Listen for clicks in the browser
// document.addEventListener('click', function (event) {

//   // //Only run if it´s a menucarola__option
//   if (!event.target.classList.contains('menucarola__option')) return;
//   //comprobar que funciona evento
//   console.log(event);


//   //Get content area con el target = #
//   const vanilla__div = document.querySelector(event.target.hash);
//   if (!vanilla__div) return;

//   //add and remove class active
//   vanilla__div.classList.toggle('active');

// }, false);


// //___________


const sneackers = '.sneackers';
const area__sneackers = document.querySelectorAll(sneackers);
console.log(area__sneackers);

document.addEventListener('click', function (eventcarola) {
  if (!event.target.classList.contains('menucarola__option')) return;

  //paint trouser, glasses
  const paintcarola__area = document.querySelector(eventcarola.target.hash);
  if (!paintcarola__area) return;
  paintcarola__area.classList.toggle('active');

  //paint sneackers
  // const paintcarola__sneackers = document.querySelectorAll(eventcarola.classList.paintcarola__area);
  // if (!paintcarola__sneackers) return;
  // paintcarola__sneackers.classList.toggle('active');

})




