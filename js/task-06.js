
const formImputEL = document.querySelector('#validation-input');



formImputEL.addEventListener('blur', (event) => {
    if (formImputEL.value.length === Number(event.target.getAttribute('data-length'))) {
        formImputEL.classList.add('valid');
        formImputEL.classList.remove('invalid');
    } else {
        formImputEL.classList.remove('valid');
        formImputEL.classList.add('invalid');
    }
})


