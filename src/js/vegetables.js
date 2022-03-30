const input = document.querySelector(".input-js");
const btnAddVeg = document.querySelector(".addFruit-js");
const listOfVegs = document.querySelector(".listOfFruits-js");
const addToList = document.querySelector(".addToList-js");
const deleteVeg = document.querySelector(".delete-js");

const key = "vegetables";

const keyList = "shopList";

let vegetables = [
  "Awokado",
  "Batat",
  "Brokuł",
  "Cebula",
  "Cukinia",
  "Czosnek",
  "Fasolka szparagowa",
  "Kalafior",
  "Kapusta",
  "Kukurydza",
  "Marchewka",
  "Ogórek",
  "Papryka",
  "Pietruszka",
  "Pomidor",
  "Por",
  "Rukola",
  "Rzodkiewka",
  "Sałata",
  "Szczypiorek",
  "Szparag",
  "Szpinak",
  "Ziemniak",
];
let shopList = [];
let currentVeg;
let currentVegValue;
let i = 0;
const deleteItem = (currentItem, currentItemValue, itemsArray, key) => {
  const itemToDelete = document.querySelector(`${"." + currentItem}`);
  itemToDelete.remove();
  let currentItemIndex = vegetables.indexOf(currentItemValue);
  itemsArray.splice(currentItemIndex, 1);
  localStorage.setItem(key, JSON.stringify(itemsArray));
};

btnAddVeg.addEventListener("click", (e) => {
  if (input.value) {
    vegetables.push(input.value);
    vegetables.sort();
    const element = vegetables.find((e) => e == input.value);
    localStorage.setItem(key, JSON.stringify(vegetables));
    let vegStorage = localStorage.getItem(key);
    vegetables = JSON.parse(vegStorage);
    listOfVegs.innerHTML += `<li class="listOfFruits-fruit  ${
      "number" + i
    } fontStyle fruit-js">${element}</li>`;
    input.value = "";
    i++;
  }
});

listOfVegs.addEventListener("click", (e) => {
  currentVegValue = e.target.innerHTML;
  currentVeg = e.target.classList[1];
});

deleteVeg.addEventListener("click", () => {
  deleteItem(currentVeg, currentVegValue, vegetables, key);
});
// deleteFruit.addEventListener("click", (e) => {
//   const fruitToDelete = document.querySelector(`${"." + currentFruit}`);
//   fruitToDelete.remove();
//   let currentFruitIndex = fruits.indexOf(currentFruitValue);
//   fruits.splice(currentFruitIndex, 1);
//   localStorage.setItem(key, JSON.stringify(fruits));
// });

addToList.addEventListener("click", () => {
  if (localStorage.getItem(keyList)) {
    let listFromLocalStorage = localStorage.getItem(keyList);
    shopList = JSON.parse(listFromLocalStorage);
    shopList.push(currentVegValue);
    localStorage.setItem(keyList, JSON.stringify(shopList));
  } else {
    shopList.push(currentVegValue);
    localStorage.setItem(keyList, JSON.stringify(shopList));
  }
});

const start = () => {
  if (localStorage.vegetables == "[]") {
    localStorage.setItem(key, JSON.stringify(vegetables));
    console.log(true);
  } else if (localStorage.getItem(key)) {
    let vegFromLocalStorage = localStorage.getItem(key);
    vegetables = JSON.parse(vegFromLocalStorage);
  } else {
    localStorage.setItem(key, JSON.stringify(vegetables));
  }
};

start();

function vegRender() {
  vegetables.forEach(function (item) {
    listOfVegs.innerHTML += `<li class="listOfFruits-fruit ${
      "number" + i
    } fontStyle fruit-js">${item}</li>`;
    i++;
  });
}

// function shopListRender() {
//   let savedList = localStorage.getItem(keyList);
//   shopList = JSON.parse(savedList);
//   console.log(shopList);
// }

// shopListRender();

vegRender();
