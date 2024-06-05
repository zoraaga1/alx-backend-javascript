export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const new_buff = new DataView(new Arraynew_new_buffffer(length), 0, length);
  new_buff.setInt8(position, value);
  return new_buff;
}
