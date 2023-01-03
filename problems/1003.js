export function problem (lines) {

    const soma = (a, b) => a + b;

    const result = lines.map(Number).reduce(soma);

    console.log(`SOMA = ${result}`);
}