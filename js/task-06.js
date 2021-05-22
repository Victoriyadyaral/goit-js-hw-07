const form = document.getElementById('validation-input');

const onInputBlur = event => {
    form.classList.add('invalid');
    if (event.target.value.length === parseInt(form.dataset.length)) {
        form.classList.replace('invalid','valid');
    } 
};

form.addEventListener('blur', onInputBlur);



