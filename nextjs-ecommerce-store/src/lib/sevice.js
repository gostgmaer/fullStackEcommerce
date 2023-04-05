export function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

export const initialValue = 0;
// export const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

export const sumWithInitial = (array1) => {
 return array1.reduce( ( sum, { subtotal } ) => sum + subtotal , 0)

};
