export function setRecord<K, V>(map: Map<K, V>, setMap: (map: Map<K, V>) => void, record: [K, V]): void{
  console.log('setRecord', map)
  const copyMap = new Map(map.entries());
  copyMap.set(record[0], record[1]);
  setMap(copyMap);
}