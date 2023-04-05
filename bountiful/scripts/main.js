function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();

document.querySelector('#copy').innerHTML = '&copy;' + year + "| Bountiful Foods";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// Number of Drinks Ordered

// drinkCount();
let drinkcount = 0
function drinkCount() {
    console.log(localStorage.getItem('drinkcount'))
  if (localStorage.getItem('drinkcount')) {
    drinkcount = Number(localStorage.getItem('drinkcount'))+1;
    localStorage.setItem('drinkcount', drinkcount);
  } else {
    localStorage.setItem('drinkcount', 1);
  }
  console.log(localStorage.getItem('drinkcount'));
}
document.querySelector("#drinkCount").addEventListener("click", drinkCount)