// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

btnMinus.addEventListener('click', () => {
    counterValue--
    counter.textContent = counterValue;
    console.log('button -1 was clicked'); // это я для себя
});

btnPlus.addEventListener('click', () => {
    counterValue++
    counter.textContent = counterValue; 
console.log('button +1 was clicked'); // это тоже я для себя
})
