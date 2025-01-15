
import { add } from './calculator'
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
