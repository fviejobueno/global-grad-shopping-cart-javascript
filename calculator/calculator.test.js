
import { add, substract } from './calculator'
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
     

})
test('substract', () =>{
     //given
     const a = 5
     const b = 10
     //when
     const functionResta = substract(a, b)
     //then
     const resultadoEsp = 5

     expect(functionResta).toBe(resultadoEsp)
})