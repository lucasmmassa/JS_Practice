const rand = (min, max) => Math.floor(Math.random()*(max - min) + min);

const randomUpperCase = () => String.fromCharCode(rand(65, 91));

const randomLowerCase = () => String.fromCharCode(rand(97, 123));

const randomNumber = () => String.fromCharCode(rand(48, 58));

const symbols = '!@#$%&?<>:{}[]-=+()*';
const randomSymbol = () => symbols[rand(0, symbols.length)];

export default function generatorFactory(upper, lower, number, symbol) {
    let generationFunctions = [];
    
    if(upper) {
        generationFunctions.push(randomUpperCase);
    }
    if(lower) {
        generationFunctions.push(randomLowerCase);
    }
    if(number) {
        generationFunctions.push(randomNumber);
    }
    if(symbol) {
        generationFunctions.push(randomSymbol);
    }

    return {
        generators: generationFunctions,
        generate: function(length) {
            let password = '';
            for(let i=0; i<length; i++) {
                let idx = rand(0, this.generators.length);
                password += this.generators[idx]();
            }
            return password;
        }
    }
};