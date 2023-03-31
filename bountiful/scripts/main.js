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
  document.querySelector("#number_ordered").innerHTML = localStorage.getItem('drinkcount');
}
document.querySelector("#drinkCount").addEventListener("click", drinkCount)

// Fruit options
const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });


      // Order message
      // get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById("fresh_content");
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener("submit", function (e) {
  // stop the form from doing the default action.
  e.preventDefault();
  // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
  feedbackElement.innerHTML =
    "Hello " +
    formElement.firstname.value +
    "! You ordered: ";
  // make the feedback element visible.
  feedbackElement.style.display = "block";
  // add a class to move everything down so our message doesn't cover it.
  document.body.classList.toggle("moveDown");
});