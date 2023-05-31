export function problem (lines) {
  const [dist, comb] = lines;

  const result = dist / comb

  console.log(`${result.toFixed(3)} km/l`);
}