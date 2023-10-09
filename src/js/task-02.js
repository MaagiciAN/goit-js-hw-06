const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul#ingredients');

ingredients.forEach((ingredients) => {
  const listItem = document.createElement('li');

  listItem.textContent = ingredients;

  ingredientsList.appendChild(listItem);
});
console.log(ingredientsList);
