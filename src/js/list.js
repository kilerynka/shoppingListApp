const listOfItems = document.querySelector(".shoppingList-js");
const deleteListItem = document.querySelector(".listDelete-js");
const inputItem = document.querySelector(".inputItem-js");
const btnAddItem = document.querySelector(".addItemToList-js");

const keyList = "shopList";

let shoppingList = [];
let i = 0;
let currentItemValue;
let currentItem;

const shoppingListRender = () => {
  if (localStorage.getItem(keyList)) {
    let shopList = localStorage.getItem(keyList);
    shoppingList = JSON.parse(shopList);
    shoppingList.sort();
    shoppingList.forEach(function (item) {
      listOfItems.innerHTML += `<li class="listOfFruits-fruit ${
        "number" + i
      } fontStyle shoppingList-js">${item}</li>`;
      i++;
    });
  }
};

listOfItems.addEventListener("click", (e) => {
  currentItemValue = e.target.innerHTML;
  currentItem = e.target.classList[1];
});

shoppingListRender();

deleteListItem.addEventListener("click", (e) => {
  const itemToDelete = document.querySelector(`${"." + currentItem}`);
  itemToDelete.remove();
  let currentItemIndex = shoppingList.indexOf(currentItemValue);
  shoppingList.splice(currentItemIndex, 1);
  localStorage.setItem(keyList, JSON.stringify(shoppingList));
});

btnAddItem.addEventListener("click", () => {
  if (inputItem.value) {
    shoppingList.push(inputItem.value);
    shoppingList.sort();
    const element = shoppingList.find((e) => e == inputItem.value);
    localStorage.setItem(keyList, JSON.stringify(shoppingList));
    listOfItems.innerHTML += `<li class="listOfFruits-fruit ${
      "number" + i
    } fontStyle shoppingList-js">${element}</li>`;
    inputItem.value = " ";
  }
});
