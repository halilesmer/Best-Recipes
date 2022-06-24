const container = document.querySelector(".container");
const searchContainer = document.querySelector(".searchContainer");
// const card = document.querySelector(".cardContainer");

console.log("dataInformation.js: ", data);
const infoData = recipeDetail.extendedIngredients;

cardContainer.addEventListener("click", () => {
  cardContainer.classList.add("makeDisplayNone");

  //   console.log("data: ", recipeDetail);

  /* --- Selected Elements --- */

  const main = document.querySelector("main");

  /* --- Created Elements --- */

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

  /* --- Set Attributes --- */

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

  //-- Textcontent ----
  recipeH1.textContent = recipeDetail.title;
  timeTextP.innerText = "Make it in: 35 minutes";
  IngredientsSubtitleH2.innerText = "Ingredients";
  IngredientsTextCon.innerText = "Ingredients Textes";
  subtitleH2.innerText = "Steps";

  /* --- Appendchild --- */
  main.appendChild(recipeImageCon);

  recipeImageCon.appendChild(mainImg);

  main.appendChild(recipeTextCon);
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
    const steps = recipeDetail.analyzedInstructions[x].steps;
    for (
      let y = 0;
      y < recipeDetail.analyzedInstructions[x].steps.length;
      y++
    ) {
      //   console.log("steps: ", recipeDetail.analyzedInstructions[x].steps[y]);

      const sortedSteps = recipeDetail.analyzedInstructions[x].steps.sort(
        (a, b) => b.number - a.number
      );

      console.log("sortedSteps: ", sortedSteps[y].step);

        stepsListOl.insertAdjacentHTML('beforeend', `
        <li>
            ${sortedSteps[y].step}
            
            </li>
        `)
     /*  stepsListOl.innerHTML = ` <li>
            ${sortedSteps[y].step}
            
            </li>`; */
    }
  }
});

// <main class="row justify-content-md-center mt-3 mb-2 reripeMainContainer">

//     <div class="col col-md-6 recipeImageCon">
//       <img src=${recipeDetail.image} alt="mainImage" />
//     </div>

//     <div class="col col-md-6 recipeTextCon">
//       <div class="recipeHeader">
//         <h1>${recipeDetail.title}</h1>
//       </div>
//       <div class="preparationTimeCon">
//         <div class="timeIcon">
//           <i class="fa-solid fa-clock"></i>
//         </div>

//         <div class="timeText">
//           <p class="bold">Make it in: 35 minutes</p>
//         </div>
//       </div>
//       <div class="description">
//         <p itemprop="description" class="semibold">
//           Jazzed up with chocolate, these holiday gingerbread cookies are
//           sweet, spicy and FLAMIN' HOT<sup>®</sup>!
//         </p>
//       </div>
//       <div class="block recipeIngredientsCon">
//         <div class="subtitle">
//           <h2>Ingredients</h2>
//         </div>
//       </div>

//        <div class="block stepsCon">
//         <div class="subtitle">
//           <h2>Steps</h2>
//         </div>
//       </div>

//       <div class="parent-btn to-share-container">
//         <div class="to-share-text">
//           <p class="bold hide-mobile">Share This Recipe</p>
//         </div>

//         <i class="fa-brands fa-thin fa-user fa-whatsapp-square"></i>

//         <i class="fa-solid fa-envelope"></i>
//       </div>
//     </div>
//   </main>

// `
//   );
