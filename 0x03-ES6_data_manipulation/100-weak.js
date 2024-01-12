export const weakMap = new WeakMap();

export function queryAPI(eArg) {
  const initVal = weakMap.get(eArg);

  weakMap.set(eArg, initVal === undefined ? 1 : initVal + 1);
  if (weakMap.get(eArg) >= 5) throw new Error('Endpoint load is high');
}
