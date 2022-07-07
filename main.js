// const localIngredientsData = findByIngredientsData;
const mainData = GroceryProductsData;
const detailsData = recipeDetail;

// const fetchIngredientsDatas = async () => {
//   let urls = [
//     `https://api.spoonacular.com/food/products/search?number=100&query=pizza&addProductInformation=true&apiKey=${API_KEY_TAX}`,
//     `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY_TAX}`
//   ];
//   // let url = './data/findByIngredients.js'
//   try {
//     const responses = await Promise.all(
//       urls.map(url => {
//         const response = fetch(url)
//         return response;
//       })
//       )
//       console.log("responses: ", responses);

//     if (responses[0].status === 200 && responses[1].status === 200) {
//       const mainData = await responses[0].json();
//       const detailsData = await responses[1].json();
//       console.log("mainData: ", mainData);
//       console.log("detailsData: ", detailsData);

//       controller(mainData, detailsData)

//     }
//   } catch (error) {
//     console.log("error: ", error);

//   }

//   // const response = await fetch(url);
//   // const result = await response.json();

// };

// /* ------- Controller ----- */
// const controller = async (mainData, detailsData) => {
//      const data = await fetchIngredientsDatas()
//      console.log("data: ", data);

//     deleteFilterButtonFunk(mainData);
//     cards(mainData);

//      recipeDetailsEventListener(detailsData)

//     setEventListeners(mainData);
//     getDataForOptions(mainData)

// };

/* ------- Controller - only for local Data ----- */
const controller = (mainData, detailsData) => {

  deleteFilterButtonFunk(mainData);
  cards(mainData);

  // recipeDetailsEventListener(mainData, detailsData);

  setEventListeners(mainData);
  getDataForOptions(mainData);
};

/* --- Recipe Event Listener / Open the Recipe Details Site  -----*/
const recipeDetailsEventListener = (mainData, detailsData) => {
  const card = document.querySelectorAll(".card");

  card.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("click eventListerner");

      recipeDetails(mainData, detailsData);
    });
  });
};

/* -------  Cards Lists ----------- */
const cards = (data) => {
  const cardRow = document.querySelector("#card-lists .row");
  /* ----- first delete the content of card elements -----*/
  cardRow.innerHTML = "";

  /* -------- Warning if no result displayed ---------- starts*/
  if (data.length < 1) {
    const warningParagr = document.createElement("h2");
    warningParagr.innerText =
      "no results found. please try another search".toUpperCase();
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
                 <i class="fa-solid fa-clock"></i>
                <span>  
  
            ${recipeDetail.preparationMinutes + recipeDetail.cookingMinutes}
            
            Min   -</span>
              <span>${data[i].likes}</span>
              <i class="fa-regular fa-heart checked"></i>  


              </div>
              <div class="list-group list-group-flush">
                <button class="btn btn-outline-info card-link btn-sm card-button" role="button">Recipe Details</button>
  
              </div>
          </div>
     </div>
      
  
      `
    );
  }

  recipeDetailsEventListener(mainData, detailsData);
};

/* Recipe Details Site */
const recipeDetails = (mainData, detailsData) => {
  console.log("data recipeDetails: ", detailsData);
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.add("makeDisplayNone");

  const mainElement = document.querySelector("main");
  mainElement.classList.remove("makeDisplayNone");

  const test = document.querySelector("main");

  /* --- Created Elements --- */
  const backButtonDiv = document.createElement("div");
  backButtonDiv.setAttribute("class", "arrow-left");

  const recipeDetailsCon = document.createElement("div");
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
  IngredientsTextCon.setAttribute("class", "ingredientsTextCon");
  IngredientsTextCon.innerText = "Ingredients Textes";

  const IngredientsOl = document.createElement("ol");

  const recipeH1 = document.createElement("h1");
  recipeH1.textContent = detailsData.title;

  const mainImg = document.createElement("img");
  mainImg.setAttribute("alt", "mainImage");
  mainImg.setAttribute("src", detailsData.image);

  const stepsCon = document.createElement("div");
  stepsCon.setAttribute("class", "block stepsCon");

  const stepsListCon = document.createElement("div");
  stepsListCon.setAttribute("class", "stepsListCon");

  const stepsSubtitle = document.createElement("div");
  stepsSubtitle.setAttribute("class", "subtitle");

  const subtitleH2 = document.createElement("h2");
  subtitleH2.innerText = "Steps";

  const stepsListOl = document.createElement("ol");

  const moreButton = document.createElement("button");
  moreButton.setAttribute("class", "btn btn-info");
  moreButton.setAttribute("id", "showMoreBtn");
  moreButton.innerText = "Show More";

  mainElement.appendChild(recipeDetailsCon);
  recipeDetailsCon.appendChild(backButtonDiv);
  backButtonDiv.appendChild(backButton);
  backButtonDiv.appendChild(arrowLeftIcon);
  recipeDetailsCon.appendChild(recipeImageCon);
  recipeImageCon.appendChild(mainImg);
  recipeDetailsCon.appendChild(recipeTextCon);
  recipeTextCon.appendChild(recipeHeader);

  recipeTextCon.appendChild(preparationTimeCon);
  preparationTimeCon.appendChild(timeIcon);
  preparationTimeCon.appendChild(timeTextCon);
  timeIcon.appendChild(timeIconI);
  timeTextCon.appendChild(timeTextP);

  recipeTextCon.appendChild(recipeIngredientsCon);

  recipeIngredientsCon.appendChild(IngredientsSubtitleCon);
  IngredientsSubtitleCon.appendChild(IngredientsSubtitleH2);
  recipeIngredientsCon.appendChild(IngredientsTextCon);
  IngredientsTextCon.appendChild(IngredientsOl);
  recipeHeader.appendChild(recipeH1);
  recipeTextCon.appendChild(stepsCon);

  stepsCon.appendChild(stepsSubtitle);
  stepsSubtitle.appendChild(subtitleH2);
  stepsCon.appendChild(stepsListCon);
  stepsListCon.appendChild(stepsListOl);
  stepsCon.appendChild(moreButton);

  // ------  Ingredients List - ------
  // for (let x = 0; x < detailsData.length; x++) {
  //   console.log("detailsData: ", detailsData);
  //   for (let y = 0; y < detailsData[x].usedIngredients.length; y++) {
  //     IngredientsOl.innerHTML = ` <li>
  //             ${detailsData[x].usedIngredients[y].amount}
  //             ${detailsData[x].usedIngredients[y].unit}
  //             ${detailsData[x].usedIngredients[y].aisle}
  //             </li>`;
  //   }
  // }

  //
  for (let x = 0; x < detailsData.analyzedInstructions.length; x++) {
    // const steps = detailsData.analyzedInstructions[x].steps;
    for (let y = 0; y < detailsData.analyzedInstructions[x].steps.length; y++) {
      const sortedSteps = detailsData.analyzedInstructions[x].steps.sort(
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

/* ----------- Add event listener --------------- starts*/
const setEventListeners = (data) => {
  /* ------- Searching recipes by typing ------------ */
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    // searchFunc(data);
    combinedFilters();
  });
  /* ---------- Select an Option -------------- */
  const select = document.querySelector(".option-select");
  select.addEventListener("change", () => {
    // selectOptions(data);
    combinedFilters();
  });

  /* ------- Sorting recipes by checkboxing ------------ */
  const checkBLikes = document.querySelector("#checkBoxLikes");
  checkBLikes.addEventListener("click", () => {
    // checkBoxLikesFunk(data);
    combinedFilters();
    /*  */
  });

  /* -----------   Set CombinedFilters  testing --------------------------- */

  /* -----------   Set CombinedFilters ---------- */
  const combinedFilters = () => {
    const selectedValue = document.querySelector(".option-select").value;
    const searchValue = document
      .getElementById("searchInput")
      .value.trim()
      .replace(/  +/g, " ")
      .toLowerCase();

    const filteredData = data
      /*------- search value ------ */
      .filter((item) => {
        if (searchValue === "") {
          return true;
        }

        return item.title.toLowerCase().includes(searchValue);
      })
      .filter((item) => {
        if (selectedValue === "---- All ----" || selectedValue === "---- Options ----") {
          return true;
        }

        return item.badges.includes(
          selectedValue.toLowerCase().replace(" ", "_")
        );
      });

    const printData = (filteredData) => {
      checkBoxLikesFunk(filteredData);
    };

    /* -------- Sort recipes by Likes */
    function checkBoxLikesFunk(data) {
      const checkBLikes = document.querySelector("#checkBoxLikes");
      const sortCheckBoxLabel = document.querySelector(".sortCheckBoxLabel");

      const isChecked = checkBLikes.checked;
      // const isChecked = sortCheckBoxLabel.checked;
      console.log("isChecked: ", isChecked);
      let sortedData = [];

      data.forEach((item) => {
        sortedData.push(item);
        item;
      });

      if (isChecked) {
        sortCheckBoxLabel.innerHTML = "";
        sortCheckBoxLabel.innerHTML = "Sort by Likes";

        sortedData = sortedData.sort((a, b) => a.likes - b.likes);
        sortCheckBoxLabel.insertAdjacentHTML(
          "beforeend",
          `<i class="fa-solid fa-arrow-up-9-1"></i>`
        );
      } else {
        sortCheckBoxLabel.innerHTML = "";
        sortCheckBoxLabel.innerHTML = "Sort by Likes";

        sortedData = sortedData.sort((a, b) => b.likes - a.likes);
        sortCheckBoxLabel.insertAdjacentHTML(
          "beforeend",
          `<i class="fa-solid fa-arrow-down-1-9"></i>`
        );
      }
      cards(sortedData);

      // printData(sortedData);
      // recipeDetailsEventListener(data);
    }

    // cards(filteredData)
    printData(filteredData);
  };

  /* Reseting/ deleting the actuell filters */
  const inputGroup = document.querySelector(".input-group");

  const deleteFilterButton = document.createElement("button");
  deleteFilterButton.innerText = "Delete Filters";
  deleteFilterButton.setAttribute("class", "btn btn-secondary");
  deleteFilterButton.setAttribute("type", "button");

  inputGroup.appendChild(deleteFilterButton);

  deleteFilterButton.addEventListener("click", () => {
    deleteFilterButtonFunk();
  });
};
/* ----------- Add event listener --------------- ends*/

// const searchFunc = (data) => {
//   const inputValue = document
//     .getElementById("searchInput")
//     .value.trim()
//     .replace(/  +/g, " ")
//     .toUpperCase();

//   /* multiple spaces trimmed */
//   //  let inputValue = e.target.value.trim().replace(/  +/g, " ").toUpperCase();

//   const searchResult = data.filter((item) =>
//     item.title.toUpperCase().includes(inputValue)
//   );
//   cards(searchResult);
// };

const getDataForOptions = (data) => {
  const select = document.querySelector(".option-select");

  let response = [];

  data.forEach((item) => {
    item.badges.forEach((el) => {
      response.push(el);
    });
  });

  const removeDoubbles = [...new Set(response)].sort();
  console.log("removeDoubbles: ", removeDoubbles);

  removeDoubbles.forEach((item) => {
    const option = document.createElement("option");
    option.innerText = item.toUpperCase().replace("_", " ");
    select.appendChild(option);
  });
};
// const selectOptions = (data) => {
//   const select = document.querySelector(".option-select");

//   let result = []
//   for (let index = 0; index < data.length; index++) {
//     for (let i = 0; i < data[index].badges.length; i++) {

//       if (data[index].badges[i].toUpperCase().replace("_", " ") === select.value) {
//         result.push(data[index])
//       }

//     }
//   }
//   console.log("result: ", result);
//   cards(result)
// }

const deleteFilterButtonFunk = () => {
  const filterForm = document.querySelector(".filter-form");

  filterForm.reset();
  cards(mainData);
};


controller(mainData, detailsData);
