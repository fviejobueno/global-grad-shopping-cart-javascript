export function add(a, b) {
  return a + b;
}

export function sustract(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  return a / b;
}

export function dividirPorCero(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a / b;
  }
}
