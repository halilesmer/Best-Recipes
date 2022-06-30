const localIngredientsData = findByIngredientsData;

const fetchIngredientsDatas = async () => {
  let url =
    "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0e4735ab591743daacfbc5f29963e1aa&ingredients=chicken";
  // let url = './data/findByIngredients.js'

  const response = await fetch(url);
  const result = await response.json();
  console.log("result: ", result);
};

const controller = async () => {
  try {
    const data = await fetchIngredientsDatas();
    console.log("data: ", data);

    // if the data not reachable, than use local data
    data === undefined
      ? cards(localIngredientsData)
      : cards(data)




    searchFunc()



  } catch (error) {
    console.log("error: ", error);
  }



};




const cards = (data) => {
  const cardContainer = document.querySelector(".card-container");

  const cardRow = document.querySelector("#card-lists .row");

  for (let i = 0; i < data.length; i++) {
    cardRow.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="col">
          <div class="card" style="width: 18rem;"">

            <div class="image-wrapper hover01 column">
              <figure><img src="${data[i].image
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
<span>  ${recipeDetail.preparationMinutes + recipeDetail.cookingMinutes
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
  searchFunc()


  cardContainer.addEventListener("click", () => {
    recipeDetailsEventListener(data);
  });

};

function searchFunc() {
  const cardContainer = document.querySelector(".card-container");
  const cardLists = document.querySelector("#card-lists");
  const input = document.getElementById("searchInput").value.toUpperCase();
  console.log("input: ", input);

  const cards = cardLists.getElementsByClassName("col");

  const warningParagr = document.createElement('p');
  warningParagr.innerText = ''
  cardContainer.appendChild(warningParagr)

  console.log('test', !'Buffalo Chicken Wings Wonton Wraps'.toUpperCase().includes(input))


  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h3.card-title");

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
      cards[i].style.display = "";
      console.log('if')
    } else {
      cards[i].style.display = "none";
      console.log('else', cards.length)
    }
  }

  // if (!(title.textContent.toUpperCase().includes(input)) && (input.length > 0)) {
  //   console.log('else if')
  //   warningParagr.innerText = ''

  //   warningParagr.innerText = 'no results found. please try another search'.toUpperCase()
  //   cardContainer.appendChild(warningParagr)
  // }
  //  else if ((title.innerText.toUpperCase() === input) && (input.length > 0)) {
  //   console.log('else if')
  //   warningParagr.innerText = ''
  //   cardContainer.appendChild(warningParagr)
  // } 
}



  /* works welll!!! /// searchFunc()*/
  // const cardContainer = document.querySelector(".card-container");
  // const cardLists = document.querySelector("#card-lists");
  // const input = document.getElementById("searchInput").value.toUpperCase();
  // console.log("input: ", input);

  // const cards = cardLists.getElementsByClassName("col");

  // const warningParagr = document.createElement('p');
  // warningParagr.innerText = '' 
  // cardContainer.appendChild(warningParagr)

  // console.log('test', !'Buffalo Chicken Wings Wonton Wraps'.toUpperCase().includes(input))


  // for (let i = 0; i < cards.length; i++) {
  //   let title = cards[i].querySelector(".card-body h3.card-title");

  //   if (title.innerText.toUpperCase().indexOf(input) > -1) {
  //     cards[i].style.display = "";
  //     console.log('if')
  //   }  else {
  //     cards[i].style.display = "none";
  //     console.log('else', cards.length)
  //   }
  // }






/* Open the Recipe Details Site */

const recipeDetailsEventListener = (data) => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.add("makeDisplayNone");

  const mainContainer = document.querySelector("main");
  mainContainer.classList.remove("makeDisplayNone");



  /* --- Selected Elements --- */
  const main = document.querySelector("main");

  /* --- Created Elements --- */
  const recipeDetailsCon = document.createElement('div');

  const backButtonDiv = document.createElement('div');
  const arrowLeftIcon = document.createElement("i");
  const backButton = document.createElement("button");

  const recipeImageCon = document.createElement("div");
  const recipeTextCon = document.createElement("div");
  const recipeHeader = document.createElement("div");
  const preparationTimeCon = document.createElement("div");
  const timeIcon = document.createElement("div");
  const timeIconI = document.createElement("i");

  const timeTextCon = document.createElement("div");
  const timeTextP = document.createElement("p");

  const recipeIngredientsCon = document.createElement("div");
  const IngredientsSubtitleCon = document.createElement("div");
  const IngredientsSubtitleH2 = document.createElement("h2");

  const IngredientsTextCon = document.createElement("div");
  const IngredientsOl = document.createElement("ol");

  const recipeH1 = document.createElement("h1");
  const mainImg = document.createElement("img");

  const stepsCon = document.createElement("div");
  const stepsSubtitle = document.createElement("div");
  const subtitleH2 = document.createElement("h2");
  const stepsListCon = document.createElement("div");
  const stepsListOl = document.createElement("ol");

  const moreButton = document.createElement("button");
  /* --- Set Attributes --- */
  recipeDetailsCon.setAttribute('class', 'row justify-content-md-center mt-3 mb-2 indexMainContainer' )

  backButtonDiv.setAttribute('class', 'arrow-left')
  backButton.setAttribute('class', 'btn btn-primary btn-sm');
  arrowLeftIcon.setAttribute("class", "fa-regular fa-left");

  recipeImageCon.setAttribute("class", "col col-md-4 recipeImageCon");

  mainImg.setAttribute("alt", "mainImage");
  mainImg.setAttribute("src", recipeDetail.image);

  recipeTextCon.setAttribute("class", "col col-md-8 recipeTextCon");
  recipeHeader.setAttribute("class", "recipeHeader");

  preparationTimeCon.setAttribute("class", "preparationTimeCon");
  timeIcon.setAttribute("class", "timeIcon");
  timeIconI.setAttribute("class", "fa-solid fa-clock");

  timeTextCon.setAttribute("class", "timeText");
  timeTextP.setAttribute("class", "bold");

  recipeIngredientsCon.setAttribute("class", "block recipeIngredientsCon");
  IngredientsSubtitleCon.setAttribute("class", "subtitle");

  stepsCon.setAttribute("class", "block stepsCon");
  stepsSubtitle.setAttribute("class", "subtitle");

  stepsListCon.setAttribute("class", "stepsListCon");

  moreButton.setAttribute("class", "btn btn-info");
  moreButton.setAttribute("id", "showMoreBtn");

  //-- Textcontent ----
  backButton.textContent = 'Back';

  recipeH1.textContent = recipeDetail.title;
  timeTextP.innerText = "Make it in: 35 minutes";
  IngredientsSubtitleH2.innerText = "Ingredients";
  IngredientsTextCon.innerText = "Ingredients Textes";
  subtitleH2.innerText = "Steps";

  moreButton.innerText = "Show More";

  /* --- Appendchild --- */
  main.appendChild(recipeDetailsCon);

  recipeDetailsCon.appendChild(backButtonDiv);
  backButtonDiv.appendChild(backButton);
  backButtonDiv.appendChild(arrowLeftIcon);
  
  recipeDetailsCon.appendChild(recipeImageCon);
  

  recipeImageCon.appendChild(mainImg);

  recipeDetailsCon.appendChild(recipeTextCon);
  recipeTextCon.appendChild(recipeHeader);
  recipeHeader.appendChild(recipeH1);

  recipeTextCon.appendChild(preparationTimeCon);
  preparationTimeCon.appendChild(timeIcon);
  timeIcon.appendChild(timeIconI);

  recipeTextCon.appendChild(timeTextCon);
  timeTextCon.appendChild(timeTextP);

  recipeTextCon.appendChild(recipeIngredientsCon);
  recipeIngredientsCon.appendChild(IngredientsSubtitleCon);
  IngredientsSubtitleCon.appendChild(IngredientsSubtitleH2);

  recipeIngredientsCon.appendChild(IngredientsTextCon);
  IngredientsTextCon.appendChild(IngredientsOl);

  IngredientsTextCon.appendChild(stepsCon);
  stepsCon.appendChild(stepsSubtitle);
  stepsSubtitle.appendChild(subtitleH2);

  recipeIngredientsCon.appendChild(stepsListCon);
  stepsListCon.appendChild(stepsListOl);

  recipeIngredientsCon.appendChild(moreButton);

  // ------  Ingredients List - ------
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data[x].usedIngredients.length; y++) {
      console.log("y", y);
      IngredientsOl.innerHTML = ` <li>
              ${data[x].usedIngredients[y].amount}
              ${data[x].usedIngredients[y].unit}
              ${data[x].usedIngredients[y].aisle}
              </li>`;
    }
  }

  for (let x = 0; x < recipeDetail.analyzedInstructions.length; x++) {
    // const steps = recipeDetail.analyzedInstructions[x].steps;
    for (
      let y = 0;
      y < recipeDetail.analyzedInstructions[x].steps.length;
      y++
    ) {
      const sortedSteps = recipeDetail.analyzedInstructions[x].steps.sort(
        (a, b) => b.number - a.number
      );

      stepsListOl.insertAdjacentHTML(
        "beforeend",
        `
          <li>
              ${sortedSteps[y].step}
              
              </li>
          `
      );
    }
    showMoreFunc();
  }

backButton.addEventListener('click', goHome)
};

const goHome =()=>{
  const cardContainer = document.querySelector(".card-container");
  const mainContainer = document.querySelector("main");

  console.log('goHome')
  mainContainer.classList.add("makeDisplayNone");
  cardContainer.classList.remove("makeDisplayNone");
  // cardContainer.classList.add("makeDisplayNone");

}


// Show more or less textes ---------------------------

const showMoreFunc = () => {
  let showMoreBtn = document.getElementById("showMoreBtn");

  showMoreBtn.addEventListener("click", () => {
    document.querySelector(".stepsListCon").classList.toggle("stepsListMore");

    console.log(
      "showMoreBtn.classList",
      document.querySelector(".stepsListCon").classList
    );
    const stepsListCon = document.querySelector(".stepsListCon");

    // --- Show more or less textes at the bottom
    stepsListCon.classList.contains("stepsListMore")
      ? (showMoreBtn.textContent = "Show Less")
      : (showMoreBtn.textContent = "Show More");
  });
};

// cards(data)
// fetchData()
controller();
