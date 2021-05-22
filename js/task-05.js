const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output'),
};

const handleInput = (event) => {
    refs.output.textContent = event.currentTarget.value;
};

refs.input.addEventListener('input', handleInput);