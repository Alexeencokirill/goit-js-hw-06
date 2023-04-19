// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputElBlur)

function onInputElBlur(event) {
    const lengthInput = event.currentTarget.value.length;
    // console.log(lengthInput);
    if (lengthInput === Number(textInput.dataset.length)) {
        // console.log('совпадает');
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')
    } else {
        // console.log('не совпадает');
        textInput.classList.add('invalid')
        textInput.classList.remove('valid')
    }
}

