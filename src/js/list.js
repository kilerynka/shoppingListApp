const listOfItems = document.querySelector(".shoppingList-js");
const deleteListItem = document.querySelector(".listDelete-js");

const keyList = "shopList";

let shoppingList;
let i = 0;
let currentItemValue;
let currentItem;

const shoppingListRender = () => {
  let shopList = localStorage.getItem(keyList);
  shoppingList = JSON.parse(shopList);
  shoppingList.forEach(function (item) {
    listOfItems.innerHTML += `<li class="listOfFruits-fruit ${
      "number" + i
    } fontStyle shoppingList-js">${item}</li>`;
    i++;
  });
  console.log(shoppingList);
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
