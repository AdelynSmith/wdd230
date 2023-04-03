const url = "https://adelynsmith.github.io/wdd230/bountiful/fruits.json"

async function getFruitData() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    // console.table(data.fruit); 
    // displayFruits(data.fruits);
    
    for(x in fruits ){
        var sel = document.createElement("option");
        sel.innerHTML = fruits[x].name;
        sel.value  = fruits[x].name;
        document.getElementById("fruits").appendChild(sel);
      }

  }
  
  getFruitData();

//   const displayFruits = (fruits) => {
//     const cards = document.querySelector("select#fruit_name"); // select the output container element
  
//     fruits.forEach(
//       (fruit) => {
//         // Create elements to add to the div.cards element
//         let card = document.createElement("section");
//         let h2 = document.createElement("h2");
//         let p = document.createElement("p");
//         let logo = document.createElement("img");
  
//         // Build the h2 content out to show the prophet's full name - finish the template string
//         h2.textContent = `${fruit.name} `;
//         p.textContent = `${fruit.address} ${fruit.phone}`
  
//         // Build the image portrait by setting all the relevant attribute
//         logo.setAttribute("src", fruit.image);
//         logo.setAttribute(
//           "alt",
//           `Logo of ${fruit.name}`
//         );
  
//         // Append the section(card) with the created elements
//         card.appendChild(logo);
//         card.appendChild(h2);
//         card.appendChild(p);
  
//         cards.appendChild(card);
//       } // end of forEach loop
//     );
//   }; // end of function expression
  
//   function displayTable(fruits) {
    
  
//     fruits.forEach((fruit) => {
//       let tr = document.createElement("tr");
//       let td_name = document.createElement("td");
//       let td_address = document.createElement("td");
//       let td_phone = document.createElement("td");
//       let td_website = document.createElement("td");
  
//       td_name.textContent = `${fruit.name}`;
//       td_address.textContent = fruit.address;
//       td_phone.textContent = fruit.phone;
//       td_website.textContent = fruit.website;

  
//       tr.appendChild(td_name);
//       tr.appendChild(td_address);
//       tr.appendChild(td_website);
//       tr.appendChild(td_phone);
  
//       document.querySelector("table").appendChild(tr);
//     });
//   }

//   table_class = document.querySelector(".table")
//   card_class = document.querySelector(".cards")
//   table_button = document.querySelector("#list")
//   card_button = document.querySelector("#cards")
  
//   card_button.addEventListener('click', () => {
//     card_class.style.display = "flex";
//     table_class.style.display = "none";
//   });
  
//   table_button.addEventListener('click', () => {
//     card_class.style.display = "none";
//     table_class.style.display = "block";
//     console.log
//   });

