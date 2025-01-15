import { add, sustract, multiplicar, dividir } from "./calculator";
import { expect, test } from "vitest";

test("Add numbers using the add method", () => {
  //given
  const x = 13;
  const y = 5;
  //when
  const functionSuma = add(x, y);
  //then
  const resultadoEsperado = 18;

  expect(functionSuma).toBe(resultadoEsperado);
});

test("Sustract numbers using the sustract method", () => {
  //given
  const x = 13;
  const y = 3;
  //when
  const functionResta = sustract(x, y);
  //then
  const resultadoEsperado = 10;

  expect(functionResta).toBe(resultadoEsperado);
});

test("Multiplicar numbers using the multiplicar method", () => {
  //given
  const x = 10;
  const y = 3;
  //when
  const functionMultiplicar = multiplicar(x, y);
  //then
  const resultadoEsperado = 30;

  expect(functionMultiplicar).toBe(resultadoEsperado);
});

test("Dividir numbers using the dividir method", () => {
  //given
  const x = 9;
  const y = 3;
  //when
  const functionDividir = dividir(x, y);
  //then
  const resultadoEsperado = 3;

  expect(functionDividir).toBe(resultadoEsperado);
});
