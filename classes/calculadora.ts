import { calculadoraInterface } from "../interfaces/operaciones";


export class Calculadora implements calculadoraInterface {


    constructor( private number1: number, private number2: number ) {
        this.number1 = number1;
        this.number2 = number2;
    }

    sumar(number1: number, number2: number){
        return number1 + number2;
    }

    restar(number1: number, number2: number){
        return number1 - number2;
    }

    multiplicar(number1: number, number2: number){
        return number1 * number2;
    }

    dividir(number1: number, number2: number){ 
        return (number2 !== 0 ) ? number1 / number2: 'No se puede dividir por 0';
    }
    
}
