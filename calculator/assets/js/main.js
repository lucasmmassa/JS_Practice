function calculatorFactory() {
    return {
        // attributes
        display: document.querySelector('.display'),

        // methods
        init() {
            this.clickButton();
            this.clearDisplay();
            this.enterPressed();
        },

        enterPressed() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            })
        },

        calculate() {
            let inputExpression = this.display.value;
            try {
                result = eval(inputExpression); // risky approach, used only for practicing
                if (!result) {
                    alert('Invalid input!');
                    return;
                }
                this.display.value = String(result);
            }
            catch (e) {
                alert('Invalid input!');
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButton() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteLast();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calculate();
                }

                this.display.focus();
            });
        },

        btnToDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = calculatorFactory();
calculator.init();