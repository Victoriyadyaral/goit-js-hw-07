const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.getElementById('ingredients');

const makeList = array => {
  return array.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    return listItem;
  })
};

const listItems = makeList(ingredients);

list.append(...listItems);

