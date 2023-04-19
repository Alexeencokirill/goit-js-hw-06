// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в
// категории(всех вложенных в него < li >).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log("Numbers of categories:", categories.children.length);

items.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
        console.log('Elements:', item.lastElementChild.children.length);
});

