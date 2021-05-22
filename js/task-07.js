const refs = {
    fontSizeControl: document.getElementById('font-size-control'),
    text: document.getElementById('text'),
}

const inputHandler = event => {
    refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;
}

refs.fontSizeControl.addEventListener("input", inputHandler);
