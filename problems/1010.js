export function problem (lines) {
    const [cod1, qtd1, val1] = lines[0].split(' ');
    const [cod2, qtd2, val2] = lines[1].split(' ');

    const valorTotal = (qtd1 * val1) + (qtd2 * val2);

    console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
}