"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
        this.number1 = number1;
        this.number2 = number2;
    }
    sumar(number1, number2) {
        return number1 + number2;
    }
    restar(number1, number2) {
        return number1 - number2;
    }
    multiplicar(number1, number2) {
        return number1 * number2;
    }
    dividir(number1, number2) {
        return (number2 !== 0) ? number1 / number2 : 'No se puede dividir por 0';
    }
}
exports.Calculadora = Calculadora;
