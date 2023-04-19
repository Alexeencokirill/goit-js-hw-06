// Напиши скрипт, который изменяет цвета фона элемента <body>
//  через инлайн стиль при клике на button.change - color
//   и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnColor = document.querySelector('.change-color');
const background = document.querySelector('body');
const colorValue = document.querySelector('.color');

changeBtnColor.addEventListener('click', event => {
  let colorMaker = getRandomHexColor();
  background.style.backgroundColor = colorMaker;
  colorValue.textContent = colorMaker;
})
