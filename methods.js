const array = [10, 20, 30, 31];

export function calculateLength(array) {
  let acumulador = 0;

  for (const value of array) {
    acumulador += 1;
  }
  return acumulador;
}
console.log(calculateLength(array));
