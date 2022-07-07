const recipeDetails = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 24,
  gaps: "no",
  preparationMinutes: 5,
  cookingMinutes: 1,
  aggregateLikes: 1,
  healthScore: 47,
  pricePerServing: 278.75,
  extendedIngredients: [
    {
      id: 98904,
      aisle: "Canned and Jarred;Health Foods",
      image: "chicken-broth.png",
      consistency: "LIQUID",
      name: "bone broth",
      nameClean: "bone broth",
      original: "1/2 cup bone broth",
      originalName: "bone broth",
      amount: 0.5,
      unit: "cup",
      meta: [],
      measures: {
        us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 118.294, unitShort: "ml", unitLong: "milliliters" },
      },
    },
    {
      id: 10011109,
      aisle: "Produce",
      image: "coleslaw.png",
      consistency: "SOLID",
      name: "cole slaw mix",
      nameClean: "coleslaw mix",
      original:
        "1 bag pre-shredded cole slaw mix found in the produce section near the bagged salads",
      originalName:
        "pre-shredded cole slaw mix found in the produce section near the bagged salads",
      amount: 1.0,
      unit: "bag",
      meta: [],
      measures: {
        us: { amount: 1.0, unitShort: "bag", unitLong: "bag" },
        metric: { amount: 1.0, unitShort: "bag", unitLong: "bag" },
      },
    },
    {
      id: 18368,
      aisle: "Ethnic Foods",
      image: "puff-pastry-squares.jpg",
      consistency: "SOLID",
      name: "egg roll wrappers",
      nameClean: "egg roll wrappers",
      original: "1 pkg egg roll wrappers cut into strips",
      originalName: "egg roll wrappers cut into strips",
      amount: 1.0,
      unit: "pkg",
      meta: ["cut into strips"],
      measures: {
        us: { amount: 1.0, unitShort: "pkg", unitLong: "package" },
        metric: { amount: 1.0, unitShort: "pkg", unitLong: "package" },
      },
    },
    {
      id: 1022020,
      aisle: "Spices and Seasonings",
      image: "garlic-powder.png",
      consistency: "SOLID",
      name: "garlic powder",
      nameClean: "garlic powder",
      original: "1 tbsp garlic powder or to taste",
      originalName: "garlic powder or to taste",
      amount: 1.0,
      unit: "tbsp",
      meta: ["to taste"],
      measures: {
        us: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
        metric: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
      },
    },
    {
      id: 2021,
      aisle: "Spices and Seasonings",
      image: "ginger.png",
      consistency: "SOLID",
      name: "ground ginger",
      nameClean: "ginger powder",
      original: "1 tbsp ground ginger or to taste",
      originalName: "ground ginger or to taste",
      amount: 1.0,
      unit: "tbsp",
      meta: ["to taste"],
      measures: {
        us: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
        metric: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
      },
    },
    {
      id: 10219,
      aisle: "Meat",
      image: "meat-ground.jpg",
      consistency: "SOLID",
      name: "ground pork",
      nameClean: "ground pork",
      original: "1 lb ground pork or any other meat you would like",
      originalName: "ground pork or any other meat you would like",
      amount: 1.0,
      unit: "lb",
      meta: ["or any other meat you would like"],
      measures: {
        us: { amount: 1.0, unitShort: "lb", unitLong: "pound" },
        metric: { amount: 453.592, unitShort: "g", unitLong: "grams" },
      },
    },
    {
      id: 4053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "olive-oil.jpg",
      consistency: "LIQUID",
      name: "olive oil",
      nameClean: "olive oil",
      original: "vegetable or olive oil",
      originalName: "vegetable or olive oil",
      amount: 4.0,
      unit: "servings",
      meta: [],
      measures: {
        us: { amount: 4.0, unitShort: "servings", unitLong: "servings" },
        metric: { amount: 4.0, unitShort: "servings", unitLong: "servings" },
      },
    },
    {
      id: 1002030,
      aisle: "Spices and Seasonings",
      image: "pepper.jpg",
      consistency: "SOLID",
      name: "pepper",
      nameClean: "black pepper",
      original: "1/2 tsp pepper or to taste",
      originalName: "pepper or to taste",
      amount: 0.5,
      unit: "tsp",
      meta: ["to taste"],
      measures: {
        us: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
        metric: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "SOLID",
      name: "salt",
      nameClean: "table salt",
      original: "1/ tsp salt or to taste",
      originalName: "salt or to taste",
      amount: 1.0,
      unit: "tsp",
      meta: ["to taste"],
      measures: {
        us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
        metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
      },
    },
    {
      id: 16124,
      aisle: "Ethnic Foods;Condiments",
      image: "soy-sauce.jpg",
      consistency: "LIQUID",
      name: "soy sauce",
      nameClean: "soy sauce",
      original: "1 tbsp soy sauce or to taste",
      originalName: "soy sauce or to taste",
      amount: 1.0,
      unit: "tbsp",
      meta: ["to taste"],
      measures: {
        us: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
        metric: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
      },
    },
  ],
  id: 1002030,
  title: "Instant Pot Egg Roll Bowls",
  readyInMinutes: 6,
  servings: 4,
  sourceUrl: "https://www.idonthavetimeforthat.com/instant-pot-egg-roll-bowls/",
  openLicense: -1,
  image: "https://spoonacular.com/recipeImages/1002030-556x370.jpg",
  imageType: "jpg",
  summary:
    'Instant Pot Egg Roll Bowls is a Chinese recipe that serves 4. This main course has <b>797 calories</b>, <b>34g of protein</b>, and <b>40g of fat</b> per serving. For <b>$2.79 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. It is brought to you by idonthavetimeforthat.com. From preparation to the plate, this recipe takes roughly <b>6 minutes</b>. It is a good option if you\'re following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is amazing. <a href="https://spoonacular.com/recipes/egg-roll-bowls-823792">Egg Roll Bowls</a>, <a href="https://spoonacular.com/recipes/instant-pot-burrito-bowls-974826">Instant Pot Burrito Bowls</a>, and <a href="https://spoonacular.com/recipes/instant-pot-korean-beef-bowls-983243">Instant Pot Korean Beef Bowls</a> are very similar to this recipe.',
  cuisines: ["Chinese", "Asian"],
  dishTypes: [],
  diets: ["dairy free"],
  occasions: [],
  winePairing: {},
  instructions:
    '<ol><li>Place Instant Pot on saute. Wait until it\'s hot and then add pork (or meat of choice). Add seasonings and soy sauce and brown meat. If you are using a lean meat (like ground pork or turkey) you will not need to drain it when its done. If you are using a higher fat meat (like ground beef) you will need to drain when browned.</li><li>When meat is browned, turn Instant Pot off and add the 1/2 cup <a href="https://www.idonthavetimeforthat.com/instant-pot-bone-broth/" target="_blank">bone broth</a>. Add bag of cole slaw mix on top and DO NOT stir. Place lid on and turn knob to sealing position.</li><li>Set Instant Pot on manual high pressure for 0 minutes. If you have a newer model Instant Pot, you select the pressure cook button instead for 0 minutes. And, yes 0 minutes is totally a thing. Just keep hitting the - button until the timer reaches 0.</li><li>When timer is up, preform a quick release. When pressure is released, open carefully and give everything a quick stir.</li><li>Spoon into bowls and enjoy!</li></ol>',
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Place Instant Pot on saute. Wait until it's hot and then add pork (or meat of choice).",
          ingredients: [
            {
              id: 1065062,
              name: "meat",
              localizedName: "meat",
              image: "whole-chicken.jpg",
            },
            {
              id: 10010219,
              name: "pork",
              localizedName: "pork",
              image: "pork-tenderloin-raw.png",
            },
          ],
          equipment: [
            {
              id: 414093,
              name: "instant pot",
              localizedName: "instant pot",
              image: "",
            },
          ],
        },
        {
          number: 2,
          step: "Add seasonings and soy sauce and brown meat. If you are using a lean meat (like ground pork or turkey) you will not need to drain it when its done. If you are using a higher fat meat (like ground beef) you will need to drain when browned.When meat is browned, turn Instant Pot off and add the 1/2 cup bone broth.",
          ingredients: [
            {
              id: 10023572,
              name: "ground beef",
              localizedName: "ground beef",
              image: "fresh-ground-beef.jpg",
            },
            {
              id: 10219,
              name: "ground pork",
              localizedName: "ground pork",
              image: "meat-ground.jpg",
            },
            {
              id: 98904,
              name: "bone broth",
              localizedName: "bone broth",
              image: "chicken-broth.png",
            },
            {
              id: 1042027,
              name: "seasoning",
              localizedName: "seasoning",
              image: "seasoning.png",
            },
            {
              id: 16124,
              name: "soy sauce",
              localizedName: "soy sauce",
              image: "soy-sauce.jpg",
            },
            {
              id: 5165,
              name: "whole turkey",
              localizedName: "whole turkey",
              image: "turkey-raw-whole.jpg",
            },
            {
              id: 1065062,
              name: "meat",
              localizedName: "meat",
              image: "whole-chicken.jpg",
            },
          ],
          equipment: [
            {
              id: 414093,
              name: "instant pot",
              localizedName: "instant pot",
              image: "",
            },
          ],
        },
        {
          number: 3,
          step: "Add bag of cole slaw mix on top and DO NOT stir.",
          ingredients: [
            {
              id: 10011109,
              name: "coleslaw mix",
              localizedName: "coleslaw mix",
              image: "coleslaw.png",
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: "Place lid on and turn knob to sealing position.Set Instant Pot on manual high pressure for 0 minutes. If you have a newer model Instant Pot, you select the pressure cook button instead for 0 minutes. And, yes 0 minutes is totally a thing. Just keep hitting the - button until the timer reaches 0.When timer is up, preform a quick release. When pressure is released, open carefully and give everything a quick stir.Spoon into bowls and enjoy!",
          ingredients: [],
          equipment: [
            {
              id: 414093,
              name: "instant pot",
              localizedName: "instant pot",
              image: "",
            },
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
            {
              id: 404695,
              name: "kitchen timer",
              localizedName: "kitchen timer",
              image: "kitchen-timer.jpg",
            },
          ],
          length: { number: 0, unit: "minutes" },
        },
      ],
    },
  ],
};
