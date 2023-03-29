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

if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('number_ordered').textContent = 'This is your 1st order';
} else {
    drinksOrdered();
}

function drinksOrdered() {
    let lastDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - lastDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('number_ordered').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}