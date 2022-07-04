// const localIngredientsData = findByIngredientsData;
const localIngredientsData = GroceryProductsData;

const fetchIngredientsDatas = async () => {
  let url =
    `https://api.spoonacular.com/food/products/search?number=100&query=pizza&addProductInformation=true&apiKey=99675d45f6a34d1ebbba0e30a2c17fa3`;
  // let url = './data/findByIngredients.js'

  const response = await fetch(url);
  const result = await response.json();

  console.log("result: ", result);
};

/* ------- Controller ----- */
const controller = async () => {
  try {
    const data =
      (await fetchIngredientsDatas()) !== undefined
        ? fetchIngredientsDatas()
        : localIngredientsData;
    console.log("data: ", data);

    // deleteFilterButton(data);
    cards(data);
    // recipeDetailsEventListener(data);
    // searchFunc(data);
    // checkBoxLikes(data);
    addEventListener(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

// const printData = (data) => {
//   // recipeDetailsEventListener(data);

//   // checkBoxLikes(data);
//   cards(data);
// };

/* -------  Cards Lists ----------- */
const cards = (data) => {
  const cardRow = document.querySelector("#card-lists .row");
  /* ----- first delete the content of card elements -----*/
  cardRow.innerHTML = "";

/* -------- Warning if no result displayed ---------- starts*/
  if (data.length <1) {
    const warningParagr = document.createElement("h2");
    warningParagr.innerText = "no results found. please try another search".toUpperCase();
    cardRow.appendChild(warningParagr);
  }
  /* -------- Warning if no result displayed ---------- ends*/

    for (let i = 0; i < data.length; i++) {
      cardRow.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="col mt-3 mb-3">
            <div class="card">
  
              <div class="image-wrapper hover01 column">
                <figure><img src="${
                  data[i].image
                }" class="card-img-top" alt="...">
                </figure>
              </div>
  
              <div class="card-body">
                <h3 class="card-title">${data[i].title}</h3>
              </div>
              <div class="list-group list-group-flush likes">
              
              ${data[i].badges.find(el => el === 'vegan')}


              </div>
              <div class="list-group list-group-flush">
                 <i class="fa-solid fa-clock"></i>
  <span>  ${recipeDetail.preparationMinutes + recipeDetail.cookingMinutes}    Min   -</span>
              <span>${data[i].likes}</span>
              <i class="fa-regular fa-heart checked"></i>  


              </div>
              <div class="list-group list-group-flush">
                <a class="btn btn-outline-info card-link" href="#" role="button">Recipe Details</a>
  
              </div>
          </div>
     </div>
      
  
      `
      );
    }
 
  // recipeDetailsEventListener(data);
};




/* Recipe Details Site */
const recipeDetails = (data) => {
  console.log("data recipeDetails: ", data);
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.add("makeDisplayNone");

  const mainElement = document.querySelector("main");
   mainElement.classList.remove("makeDisplayNone");
  
  const test = document.querySelector("main");
  
  
  /* --- Created Elements --- */
  const backButtonDiv = document.createElement("div");
  backButtonDiv.setAttribute("class", "arrow-left");
  
  const recipeDetailsCon = document.createElement('div');
  recipeDetailsCon.setAttribute("class", "recipeDetailsCon");


   const arrowLeftIcon = document.createElement("i");
   arrowLeftIcon.setAttribute("class", "fa-regular fa-left");

  const backButton = document.createElement("button");
  backButton.setAttribute("class", "btn btn-primary btn-sm");
  backButton.textContent = "Back";

  const recipeImageCon = document.createElement("div");
  recipeImageCon.setAttribute("class", "col col-md-4 recipeImageCon");

const recipeTextCon = document.createElement("div");
recipeTextCon.setAttribute("class", "col col-md-8 recipeTextCon");

  const recipeIngredientsCon = document.createElement("div");
  recipeIngredientsCon.setAttribute("class", "block recipeIngredientsCon");

const recipeHeader = document.createElement("div");
recipeHeader.setAttribute("class", "recipeHeader");

const preparationTimeCon = document.createElement("div");
  preparationTimeCon.setAttribute("class", "preparationTimeCon");
  
  const timeIcon = document.createElement("div");
  timeIcon.setAttribute("class", "timeIcon");
  
  const timeIconI = document.createElement("i");
  timeIconI.setAttribute("class", "fa-solid fa-clock");
  
const timeTextCon = document.createElement("div");
timeTextCon.setAttribute("class", "timeText");

const timeTextP = document.createElement("p");
timeTextP.setAttribute("class", "bold");
timeTextP.innerText = "Make it in: 35 minutes";



const IngredientsSubtitleCon = document.createElement("div");
IngredientsSubtitleCon.setAttribute("class", "subtitle");

const IngredientsSubtitleH2 = document.createElement("h2");
IngredientsSubtitleH2.innerText = "Ingredients";

const IngredientsTextCon = document.createElement("div");
IngredientsTextCon.innerText = "Ingredients Textes";

const IngredientsOl = document.createElement("ol");

const recipeH1 = document.createElement("h1");
  recipeH1.textContent = recipeDetail.title;
  
const mainImg = document.createElement("img");
mainImg.setAttribute("alt", "mainImage");
mainImg.setAttribute("src", recipeDetail.image);

const stepsCon = document.createElement("div");
stepsCon.setAttribute("class", "block stepsCon");

const stepsSubtitle = document.createElement("div");
stepsSubtitle.setAttribute("class", "subtitle");

const subtitleH2 = document.createElement("h2");
subtitleH2.innerText = "Steps";

const stepsListCon = document.createElement("div");
stepsListCon.setAttribute("class", "stepsListCon");

const stepsListOl = document.createElement("ol");

const moreButton = document.createElement("button");
moreButton.setAttribute("class", "btn btn-info");
moreButton.setAttribute("id", "showMoreBtn");
moreButton.innerText = "Show More";



mainElement.appendChild(recipeDetailsCon)
     recipeDetailsCon.appendChild(backButtonDiv);
     backButtonDiv.appendChild(backButton);
     backButtonDiv.appendChild(arrowLeftIcon);
     recipeDetailsCon.appendChild(recipeImageCon);
     recipeImageCon.appendChild(mainImg);
     recipeDetailsCon.appendChild(recipeTextCon);
  recipeTextCon.appendChild(recipeHeader);
  
  recipeTextCon.appendChild(recipeIngredientsCon);
  recipeTextCon.appendChild(timeTextCon);
  recipeTextCon.appendChild(preparationTimeCon);

  recipeIngredientsCon.appendChild(IngredientsSubtitleCon);
  IngredientsSubtitleCon.appendChild(IngredientsSubtitleH2);
  recipeIngredientsCon.appendChild(IngredientsTextCon);
  IngredientsTextCon.appendChild(IngredientsOl);
  recipeHeader.appendChild(recipeH1);
  IngredientsTextCon.appendChild(stepsCon);
  stepsCon.appendChild(stepsSubtitle);
  stepsSubtitle.appendChild(subtitleH2);
  recipeIngredientsCon.appendChild(stepsListCon);
  stepsListCon.appendChild(stepsListOl);
  recipeIngredientsCon.appendChild(moreButton);
  preparationTimeCon.appendChild(timeIcon);
  timeIcon.appendChild(timeIconI);
  timeTextCon.appendChild(timeTextP);

  // ------  Ingredients List - ------
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data[x].usedIngredients.length; y++) {
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
    // showMoreFunc();
    moreButton.addEventListener("click", showMoreFunc);
  }

  backButton.addEventListener("click", goHome);
};



const showMoreFunc = () => {
  let showMoreBtn = document.getElementById("showMoreBtn");
  console.log("showMoreBtn: ", showMoreBtn);


    document.querySelector(".stepsListCon").classList.toggle("stepsListMore");

    const stepsListCon = document.querySelector(".stepsListCon");

    // --- Show more or less textes at the bottom
    stepsListCon.classList.contains("stepsListMore")
      ? (showMoreBtn.textContent = "Show Less")
      : (showMoreBtn.textContent = "Show More");

};

const goHome = () => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.remove("makeDisplayNone");

  const recipeDetailsCon = document.querySelector(".recipeDetailsCon");
  recipeDetailsCon.parentNode.removeChild(recipeDetailsCon);
};



/* ----------- Add event listener --------------- */
const addEventListener = (data) => {
  console.log("data: ", data);
  /* ------- Searching recipes by typing ------------ */
  function searchFunc(data) {
    const searchInput = document.getElementById("searchInput");

    return searchInput.addEventListener("input", (e) => {
      /* multiple spaces trimmed */
      let inputValue = e.target.value.trim().replace(/  +/g, " ").toUpperCase();

      const searchResult = data.filter((item) =>
        item.title.toUpperCase().includes(inputValue)
      );
      // return cards(searchResult);

      checkBoxLikes(searchResult)
      //  printData(searchResult);
      cards(searchResult);
      // return checkBoxLikes(searchResult);
    });
  }
  /* ------- Sorting recipes by checkboxing ------------ */

  function checkBoxLikes(data) {
    const checkBLikes = document.querySelector("#checkBoxLikes");
    const sortCheckBoxLabel = document.querySelector(".sortCheckBoxLabel");

    checkBLikes.addEventListener("click", (e) => {
      const isChecked = e.target.checked;
      let sortedData = [];
      
      data.forEach((item) => {
        sortedData.push(item);
        item;
      });

      if (isChecked ) {
        sortCheckBoxLabel.innerHTML = "";
        sortCheckBoxLabel.innerHTML = "Sort by Likes";

        sortedData = sortedData.sort((a, b) => a.likes - b.likes);
        sortCheckBoxLabel.insertAdjacentHTML(
          "beforeend",
          `  <i class="fa-solid fa-arrow-down-1-9"></i>`
        );
      } else {
        sortCheckBoxLabel.innerHTML = "";
        sortCheckBoxLabel.innerHTML = "Sort by Likes";

        sortedData = sortedData.sort((a, b) => b.likes - a.likes);
        sortCheckBoxLabel.insertAdjacentHTML(
          "beforeend",
          `  <i class="fa-solid fa-arrow-up-9-1"></i>`
        );
      }

      cards(sortedData);
      // printData(sortedData);
      // recipeDetailsEventListener(data);
    });
  }

  /* Reseting/ deleting the actuell filters */
  const deleteFilterButton = (data) => {

    const inputGroup = document.querySelector(".input-group");
    const deleteFilterButton = document.createElement("button");

    deleteFilterButton.innerText = "Delete Filters";
    deleteFilterButton.setAttribute("class", "btn btn-secondary");
    deleteFilterButton.setAttribute("type", "button");

    inputGroup.appendChild(deleteFilterButton);

    deleteFilterButton.addEventListener("click", () => {
      cards(data);
      window.location.reload();
    });
  };

  /* --- Recipe Event Listener / Open the Recipe Details Site  -----*/
  const recipeDetailsEventListener = (data) => {
    console.log("data recipeDetailsEventListener: ", data);
    const card = document.querySelectorAll(".card");

    card.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("click eventListerner");

        recipeDetails(data);
      });
    });
  };

  searchFunc(data)
  checkBoxLikes(data)
  deleteFilterButton(data)
  recipeDetailsEventListener(data)
}


// cards(data)
// fetchData()
controller();



// console.log(navigator.geolocation.getCurrentPosition(showPosition))

// function showPosition(){
//   let latid = position.coords.
// }