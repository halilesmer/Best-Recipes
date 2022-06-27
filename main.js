const main = document.querySelector("main");
const cardContainer = document.querySelector("#card-lists");

const cardRow = document.querySelector("#card-lists .row");
console.log("cardRow: ", cardRow);



for (let i = 0; i < data.length; i++) {
  cardRow.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="col">
          <div class="card" style="width: 18rem;"">

            <div class="image-wrapper hover01 column">
              <figure><img src="${
                data[i].image
              }" class="card-img-top" alt="...">
              </figure>
            </div>

            <div class="card-body">
              <h3 class="card-title">${data[i].title}</h3>
            </div>
            <div class="list-group list-group-flush">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="list-group list-group-flush">
               <i class="fa-solid fa-clock"></i>
<span>  ${
      recipeDetail.preparationMinutes + recipeDetail.cookingMinutes
    }  Min</span>
            </div>
            <div class="list-group list-group-flush">
              <a class="btn btn-outline-info card-link" href="#" role="button">Recipe Details</a>

            </div>
        </div>
   </div>
    

    `
  );
  
}


function myFunction() {
  const input = document.getElementById("searchInput").value.toUpperCase();
  console.log("input: ", input);

  
  
  const cards = cardContainer.getElementsByClassName("col");
  console.log("cards: ", cards);

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h3.card-title");

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}




// function myFunction() {
//   // Declare variables
//   const input = document.getElementById("searchInput").value.toUpperCase();
//   console.log("input: ", input);

//   const cards = cardContainer.getElementsByClassName("card");
//   console.log("cards: ", cards);

//   for (let i = 0; i < cards.length; i++) {
//     let title = cards[i].querySelector(".card-body h3.card-title");
//     console.log("title", title);

//     if (title.innerText.toUpperCase().indexOf(input) > -1) {
//       cards[i].style.display = "";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }