export function problem (lines) {
    
    const [notaA, notaB] = lines;
    const pesoA = 3.5;
    const pesoB = 7.5;

    const media = ((notaA * pesoA + notaB * pesoB) / (pesoA + pesoB)).toFixed(5);

    console.log(`MEDIA = ${media}`);

}