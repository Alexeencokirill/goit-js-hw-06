// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients')

const ingridientsListEl = ingredients.map(ingredient => { 
  const list = document.createElement('li');
  list.classList = 'item';
  list.textContent = ingredient;

  return list;
})

// console.log(ingridientsListEl);
ingredientList.append(...ingridientsListEl) 




