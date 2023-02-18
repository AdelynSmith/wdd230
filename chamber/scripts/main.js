function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();

document.querySelector('#copy').innerHTML = '&copy;' + year + "| Idaho Falls Chamber";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

if (day == 1 || day == 2){
    document.querySelector('#banner').innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}


// storage local and session
localStorage.setItem('name','Adelyn Smith - Permanent');
sessionStorage.setItem('class','WDD230 - not Permanent');


// Number of Visits
// initialize display elements
const visitsDisplay = document.querySelector("#visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);