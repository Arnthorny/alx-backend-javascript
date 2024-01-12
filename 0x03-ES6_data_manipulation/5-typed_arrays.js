export default function createInt8TypedArray(length, position, value) {
  const newArrBuff = new ArrayBuffer(length);
  // const newView = new Int8Array(newArrBuff);
  const newView = new DataView(newArrBuff);

  if (position >= length) throw new Error('Position outside range');

  // newView[position] = value;
  newView.setInt8(position, value);

  return newView;
}
