export function getCountSymbols(str: string, symbol: string): number {
  let count = 0;
  for (let currentSymbol of symbol) {
    count += (currentSymbol.localeCompare(symbol) ? 1 : 0)
  }

  return count;
}