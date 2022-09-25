function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElRef = document.querySelector('.change-color');
const bodyElRef = document.querySelector('body');
const textElRef = document.querySelector('.color');

btnElRef.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  if (event) {
    bodyElRef.style.backgroundColor = getRandomHexColor();
    textElRef.textContent = getRandomHexColor();
  }
}
