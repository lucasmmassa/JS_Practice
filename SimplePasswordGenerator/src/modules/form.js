import generatorFactory from "./generator";

const generatedPassword = document.querySelector('.generated-password');
const passwordLength = document.querySelector('.password-length');
const chkUpperCase = document.querySelector('.chk-uppercase');
const chkLowerCase = document.querySelector('.chk-lowercase');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const generateButton = document.querySelector('.generate-password');

export default function processForm() {
    generateButton.addEventListener('click', () => {
        const generator = generatorFactory(
            chkUpperCase.checked,
            chkLowerCase.checked,
            chkNumbers.checked,
            chkSymbols.checked
        );
        generatedPassword.innerHTML = generator.generate(passwordLength.value) || 'Invalid input';

    })
}