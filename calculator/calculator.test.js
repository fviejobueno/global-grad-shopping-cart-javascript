
import { add, substract, multiply } from './calculator'
import { expect, test } from 'vitest'



test('Add numbers using the add method', () => {
     //given
     const x = 13
     const y = 0
     //when
     const functionSuma = add(x, y)
     //then
     const resultadoEsperado = 13

     expect(functionSuma).toBe(resultadoEsperado)
     

});

test('substract', () =>{
     //given
     const a = 5
     const b = 10
     //when
     const functionResta = substract(a, b)
     //then
     const resultadoEsp = 5

     expect(functionResta).toBe(resultadoEsp)
});






test('multiply', () => {
     //si tengo num1 y num2
     const num1 = 5;
     const num2 = 10;
     //cuando llamo multiply y sus parámetros num1, num2
     const multiplicacion = multiply(num1, num2)
     
     //el resultado será
     const resultadoEsperado = 50
     expect(multiplicacion).toBe(resultadoEsperado)


})
