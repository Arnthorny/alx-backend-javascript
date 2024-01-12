export default function updateUniqueItems(mapArg) {
  if (!(mapArg instanceof Map)) throw new Error('Cannot process');
  mapArg.forEach((value, key) => mapArg.set(key, value === 1 ? 100 : value));
  return mapArg;
}
