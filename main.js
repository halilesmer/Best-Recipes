const main = document.querySelector("main");
const card = document.querySelector(".cardContainer");


for (let i = 0; i < data.length; i++) {
  card.insertAdjacentHTML(
    "afterbegin",
    `
         <div class="col">
          <div class="card style="width: 18rem;"">
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
