import { Calculadora } from "./classes/calculadora";

const number1: number = 10;
const number2: number = 5;

const operacion = new Calculadora(number1, number2);

console.log(operacion.sumar(number1, number2));
console.log(operacion.restar(number1, number2));
console.log(operacion.multiplicar(number1, number2));
console.log(operacion.dividir(number1, number2));