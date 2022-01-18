// FIZZBUZZ
// Divisivel por 3 = Fizz
// Divisivel por 5 = Buzz
// Divisivel por 3 e 5 = fizzBuzz
// Não é divisivel por 3 ou 5 = entrada

const resultado = fizzBuzz(3);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "Não é um número";
  if (entrada % 3 === 0 && entrada % 5 === 0) return "fizzBuzz";
  if (entrada % 3 === 0) return "Fizz";
  if (entrada % 5 === 0) return "Buzz";
  return entrada;
}