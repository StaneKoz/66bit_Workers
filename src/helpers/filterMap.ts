export function filterMap<T, K>(map: Map<T, K>, predicate: (key: T, value: K) => boolean): Map<T, K> {
  const newMap = new Map<T, K>();
  for (let [key, value] of map.entries()) {
    if (predicate(key, value)) {
      newMap.set(key, value);
    }
  }

  return newMap;
}