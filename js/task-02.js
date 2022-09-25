const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



function makeListItem(arr) {
  const list = (arr.map(el => {
    const listItemTag = document.createElement('li');
    listItemTag.classList.add('item');
    listItemTag.textContent = el;
    return listItemTag;
  }));

const listEl = document.querySelector('#ingredients');
listEl.append(...list);
}

makeListItem(ingredients);
