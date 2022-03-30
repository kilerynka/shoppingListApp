const input = document.querySelector(".input-js");
const btnAddFruit = document.querySelector(".addFruit-js");
const listOfFruits = document.querySelector(".listOfFruits-js");
const addToList = document.querySelector(".addToList-js");
const deleteFruit = document.querySelector(".delete-js");

const key = "fruits";

const keyList = "shopList";

let fruits = [
  "Ananas",
  "Arbuz",
  "Banan",
  "Brzoskwinia",
  "Cytryna",
  "Granat",
  "Grejpfrut",
  "Gruszka",
  "Jabłko",
  "Kiwi",
  "Limonka",
  "Malina",
  "Mandarynka",
  "Mango",
  "Melon",
  "Morela",
  "Nektarynka",
  "Pomarańcza",
  "Porzeczka",
  "Śliwka",
  "Truskawka",
  "Winogrono",
  "Wiśnia",
  "Żurawina",
];
let shopList = [];
let currentFruit;
let currentFruitValue;
let i = 0;
const deleteItem = (currentItem, currentItemValue, itemsArray, key) => {
  const itemToDelete = document.querySelector(`${"." + currentItem}`);
  itemToDelete.remove();
  let currentItemIndex = fruits.indexOf(currentItemValue);
  itemsArray.splice(currentItemIndex, 1);
  localStorage.setItem(key, JSON.stringify(itemsArray));
};

btnAddFruit.addEventListener("click", (e) => {
  if (input.value) {
    fruits.push(input.value);
    fruits.sort();
    const element = fruits.find((e) => e == input.value);
    localStorage.setItem(key, JSON.stringify(fruits));
    let fruitsStorage = localStorage.getItem(key);
    fruits = JSON.parse(fruitsStorage);
    listOfFruits.innerHTML += `<li class="listOfFruits-fruit  ${
      "number" + i
    } fontStyle fruit-js">${element}</li>`;
    input.value = "";
    i++;
  }
});

listOfFruits.addEventListener("click", (e) => {
  currentFruitValue = e.target.innerHTML;
  currentFruit = e.target.classList[1];
});

deleteFruit.addEventListener("click", () => {
  deleteItem(currentFruit, currentFruitValue, fruits, key);
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
    shopList.push(currentFruitValue);
    localStorage.setItem(keyList, JSON.stringify(shopList));
  } else {
    shopList.push(currentFruitValue);
    localStorage.setItem(keyList, JSON.stringify(shopList));
  }
});

const start = () => {
  if (localStorage.fruits == "[]") {
    localStorage.setItem(key, JSON.stringify(fruits));
    console.log(true);
  } else if (localStorage.getItem(key)) {
    let fruitsFromLocalStorage = localStorage.getItem(key);
    fruits = JSON.parse(fruitsFromLocalStorage);
  } else {
    localStorage.setItem(key, JSON.stringify(fruits));
  }
};

start();

function fruitRender() {
  fruits.forEach(function (item) {
    listOfFruits.innerHTML += `<li class="listOfFruits-fruit ${
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

fruitRender();
