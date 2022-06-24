 const main = document.querySelector("main");
const cardContainer = document.querySelector("#card-lists");

const cardRow = cardContainer.querySelector('.row')
console.log("cardRow: ", cardRow);

// /*          <div class="col">
//           </div>
//  */
for (let i = 0; i < data.length; i++) {
  cardRow.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="col">
          <div class="card" style="width: 18rem;"">
          <img src="${data[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${data[i].title}</h3>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
            
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
        </div>
   </div>
    

    `
  );
  
}

// console.log("cards", cards);

// console.log("cards.length: ", cards.length);




function myFunction() {
  // Declare variables
  const input = document.getElementById("searchInput").value.toUpperCase();
  console.log("input: ", input);

  
  
  const cards = cardContainer.getElementsByClassName("card");
  console.log("cards: ", cards);


  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h3.card-title");
    console.log("title", title);

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}




// style="width: 18rem;"

// informationsData.forEach((key, index) => {
// //     console.log(`${key}: ${informationsData[key]}`);
// // });

// // Object.entries(informationsData).forEach((error) => {
// //   console.log("error", error.id);
// // });

// for (const key in informationsData) {
//   console.log('keyin',`${key}: ${informationsData}`);
//   // test = informationsData[key] === "servings";
// }

// console.log("test: ", test);
// // for (let i = 0; i < data.length; i++) {
// // console.log("dataFor", complexSearchData[i].title);

// // }
