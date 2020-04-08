const itema = ".menu-item a";
const menuitem = document.querySelectorAll(itema);
console.log(menuitem);

document.addEventListener("click", function(eventcarola) {
  if (!menuitem) return;

  //paint trouser, glasses
  const paintcarola__area = document.querySelector(eventcarola.target.hash);
  if (!paintcarola__area) return;
  paintcarola__area.classList.toggle("active");

  //paint sneackers
  // const paintcarola__sneackers = document.querySelectorAll(eventcarola.classList.paintcarola__area);
  // if (!paintcarola__sneackers) return;
  // paintcarola__sneackers.classList.toggle('active');
});
