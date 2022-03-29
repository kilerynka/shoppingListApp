const input = document.querySelector(".input-js");
const btnAddFruit = document.querySelector(".addFruit-js");
const listOfFruits = document.querySelector(".listOfFruits-js");
const addToList = document.querySelector(".addToList-js");
const deleteFruit = document.querySelector(".delete-js");

const key = "fruits";

let fruits = ["Ananas", "Arbuz", "Banan"];
let currentFruit;
let currentFruitValue;
let i = 0;

btnAddFruit.addEventListener("click", (e) => {
  if (input.value) {
    fruits.push(input.value);
    localStorage.setItem(key, JSON.stringify(fruits));
    let fruitsStorage = localStorage.getItem(key);
    fruits = JSON.parse(fruitsStorage);
    listOfFruits.innerHTML += `<li class="listOfFruits-fruit  ${
      "number" + i
    } fontStyle fruit-js">${fruits[fruits.length - 1]}</li>`;
    input.value = "";
    i++;
  }
});

listOfFruits.addEventListener("click", (e) => {
  currentFruitValue = e.target.innerHTML;
  currentFruit = e.target.classList[1];
  console.log(currentFruitValue);
});

deleteFruit.addEventListener("click", (e) => {
  const fruitToDelete = document.querySelector(`${"." + currentFruit}`);
  fruitToDelete.remove();
  let currentFruitIndex = fruits.indexOf(currentFruitValue);
  fruits.splice(currentFruitIndex, 1);
  localStorage.setItem(key, JSON.stringify(fruits));
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
fruitRender();
