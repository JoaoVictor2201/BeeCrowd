export function problem (lines) {
  const [a, b, c] = lines[0].split(' ').map(Number);
  const maiorAB = (a + b + Math.abs(a - b)) / 2;
  const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) /2;
  console.log(`${maiorABC} eh o maior`);
}