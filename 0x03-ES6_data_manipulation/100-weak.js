export const weakMap = new WeakMap();

export function queryAPI(eArg) {
  const initVal = weakMap.get(eArg);

  if (initVal !== undefined && initVal >= 5)
    throw new Error("Endpoint load is high.");
  weakMap.set(eArg, initVal === undefined ? 1 : initVal + 1);
}
