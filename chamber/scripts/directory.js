const url = "https://adelynsmith.github.io/wdd230/chamber/data.json"

async function getDirectoryData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.table(data.business); // note that we
    // reference the prophet array of the data
    // object given the structure of the json file
    displayTable(data.businesses);
  }
  
  getDirectoryData();
  
  const displayBusinesses = (business) => {
    const cards = document.querySelector("div.cards"); // select the output container element
  
    businesses.forEach(
      (business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let logo = document.createElement("img");
  
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${business.name} ${business.address}`;
  
        // Build the image portrait by setting all the relevant attribute
        logo.setAttribute("src", business.image);
        logo.setAttribute(
          "alt",
          `Logo of ${business.name}`
        );
  
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(logo);
  
        cards.appendChild(card);
      } // end of forEach loop
    );
  }; // end of function expression
  
  function displayTable(business) {
    let row = document.querySelectorAll("row");
    row.forEach((item) => {
      item.remove();
    });
  
    let section = document.querySelectorAll("section");
    section.forEach((item) => {
      item.remove();
    });
  
    business.forEach((business) => {
      let tr = document.createElement("tr");
      let td_name = document.createElement("td");
      let td_address = document.createElement("td");
      let td_phone = document.createElement("td");
      let td_website = document.createElement("td")
  
      td_name.textContent = `${business.name}`;
      td_address.textContent = business.address;
      td_phone.textContent = business.phone;
      td_website.textContent = business.website;
  
      tr.appendChild(td_name);
      tr.appendChild(td_address);
      tr.appendChild(td_website);
  
      document.querySelector("table").appendChild(tr);
    });
  }


const cardsbutton = document.querySelector("#cards");
const listbutton = document.querySelector("#list");
const display = document.querySelector("view");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

cardsbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", displayBusiness); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
