const refs = {
    inputValue: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    container: document.getElementById('boxes'),
};

const createCollection = () => {
    let amount = refs.inputValue.value;
    createBoxes(amount);
};

const createBoxes = (amount) => {
   const arrayWithDiv = [];
  for (let i = 0; i < amount; i++) {
    let blockSize = 30 + i * 10;
    const div = document.createElement("div");
    div.classList.add('box')  
    div.style.width = `${blockSize}px`;
    div.style.height = `${blockSize}px`;
    div.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()})`;
    arrayWithDiv.push(div)
    }

  refs.container.append(...arrayWithDiv);
}

function random() {
  return Math.floor(Math.random() * 255);
}

refs.renderBtn.addEventListener("click", createCollection);

const destroyBoxes = () => {
    refs.container.innerHTML = '';
    refs.inputValue.value = 0;
};

refs.destroyBtn.addEventListener("click", destroyBoxes);


